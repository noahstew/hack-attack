import { query } from '../../lib/db';

export async function GET() {
  try {
    const users = await query('SELECT email, level FROM Users');
    return Response.json(users);
  } catch (error) {
    return Response.json(
      { error: 'Database error', details: error.message },
      { status: 500 }
    );
  }
}
