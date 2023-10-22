import Link from 'next/link';
import DeleteToDo from '../components/DeleteToDo';
import { Suspense } from 'react';

async function TodosPage() {
  // const dummyWait = await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch(
    'http://localhost:3000/api/todos',
    //? don't want to store data - fetch my data every time I need it
    { cache: 'no-store' }
    //? want to cache but want to refresh every x time
    //{ next: { revalidate: 15 } }
  );
  const data = await res.json();

  return (
    <div>
      <div>
        <ul>
          {/* <li>
            The 'Loading button' will change to 'Delete' after a few second.
            Demonstrating the Suspense component form react.
          </li> */}
          <li>Clicking id 1 will show not-found page</li>
        </ul>
      </div>
      <section className='mt-24 w-full h-full flex justify-center'>
        <table className='min-w-max bg-white border border-gray-200 rounded-lg overflow-hidden'>
          <thead className='bg-gray-100 text-gray-600 uppercase text-sm leading-normal'>
            <tr className='bg-gray-800 text-white uppercase text-sm leading-normal'>
              <th className='py-3 px-6 text-left'>ID</th>
              <th className='py-3 px-6 text-left'>Name</th>
              <th className='py-3 px-6 text-left'>Action</th>
            </tr>
          </thead>
          <tbody className='text-gray-600 text-sm font-light'>
            {data.todos.map((todo) => (
              <tr
                key={todo.id}
                className='border-b border-gray-200 hover:bg-gray-100'
              >
                <td className='py-3 px-6'>
                  {/* routes through without rerendering the page, replaces a tag */}
                  <Link href={`/todos/${todo.id}`}>{todo.id}</Link>
                </td>

                <td className='py-3 px-6'>{todo.name}</td>

                <td className='py-3 px-6'>
                  {/* any child component of suspense acts like a loading boundry */}
                  {/* <Suspense fallback={<p>Loading button...</p>}> */}
                  <DeleteToDo id={todo.id} />
                  {/* </Suspense> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default TodosPage;
