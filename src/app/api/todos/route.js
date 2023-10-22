import { NextResponse } from 'next/server';

let todos = [
  { id: 1, name: 'Groceries' },
  { id: 2, name: 'Work' },
  { id: 3, name: 'Gym' },
];

// must name the function a CRUD
export async function GET() {
  // next has this specific class
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const data = await request.json();

  todos = todos.filter((todo) => todo.id !== data.id);
  console.log('debug', todos);

  return NextResponse.json({ todos });
}

export async function POST(request) {
  const data = await request.json();
  const newTodo = { id: todos.length + 1, name: data.todoName };
  todos.push(newTodo);

  return NextResponse.json({ todos });
}
