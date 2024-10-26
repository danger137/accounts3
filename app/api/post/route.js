import { v4 as uuidv4 } from 'uuid';

let posts = []; // In-memory data store

// Handle GET requests to retrieve posts
export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests to create a new post
export async function POST(req) {
  const { title, content } = await req.json();

  if (!title || !content) {
    return new Response('Missing fields', { status: 400 });
  }

  const newPost = {
    id: uuidv4(),
    title,
    content,
    date: new Date().toISOString(),
  };

  posts.push(newPost); // Add the new post to the in-memory array

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle DELETE requests to delete a post by ID
export async function DELETE(req) {
  const { id } = await req.json();

  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return new Response('Post not found', { status: 404 });
  }

  posts.splice(index, 1); // Remove the post from the array

  return new Response('Post deleted', { status: 204 });
}
