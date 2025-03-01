'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/signup';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      if (isLogin) {
        console.log('Login successful');
        router.push('/home');
      } else {
        router.push('/auth');
      }
    } else {
      const data = await response.json();
      setError(data.message);
    }
  };

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>

      <div>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? 'Need an account? Sign Up'
            : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}
