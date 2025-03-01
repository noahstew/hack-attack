import { query } from '../../../lib/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { email, password } = await req.json();

  const users = await query('SELECT * FROM Users WHERE email = $1', [email]);
  if (users.length === 0) {
    return new Response('User not found', { status: 400 });
  }

  const user = users[0];
  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return new Response('Invalid credentials', { status: 400 });
  }

  return new Response(
    JSON.stringify({ message: 'Login successful', email: user.email }),
    {
      status: 200,
    }
  );
}
