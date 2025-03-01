async function getUsers() {
  // Use a fallback if the environment variable is undefined
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  console.log('Using base URL:', baseUrl); // Debug output
  
  const res = await fetch(`${baseUrl}/api/users`, {
    cache: 'no-store', // Disable caching to always get fresh data
  });
  return res.json();
}

export default async function HomePage() {
  const users = await getUsers();

  console.log('Users: ', users);

  return (
    <div>
      <h1>Users</h1>
      <ul>
      </ul>
    </div>
  );
}
