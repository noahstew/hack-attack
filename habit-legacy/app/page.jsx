async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
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
        {users.map((user) => (
          <li key={user.email}>
            {user.email} - Level {user.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
