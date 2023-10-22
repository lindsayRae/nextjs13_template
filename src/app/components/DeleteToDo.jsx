// tells next that this is a client component - this is a directive
'use client';

import { useRouter } from 'next/navigation';

async function DeleteToDo({ id }) {
  // hook
  const router = useRouter();
  //const dummyWait = await new Promise((resolve) => setTimeout(resolve, 3000));
  async function handleDelete() {
    console.log('heard delete...');
    const res = await fetch(`http://localhost:3000/api/todos`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    const data = await res.json();
    console.log(data);
    if (data) {
      router.refresh();
      // router.push('/');
    } else {
      throw new Error('Something went wrong');
    }
  }

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteToDo;
