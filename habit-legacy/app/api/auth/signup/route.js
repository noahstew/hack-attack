import { query } from '../../../lib/db';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { email, password } = await req.json();

  const users = await query('SELECT * FROM Users WHERE email = $1', [email]);
  if (users.length > 0) {
    return new Response('Email already registered', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await query('INSERT INTO Users (email, password) VALUES ($1, $2)', [
    email,
    hashedPassword,
  ]);

  return new Response('User created successfully', { status: 201 });
}
