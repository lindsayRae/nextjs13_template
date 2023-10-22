//? 2 ways to build routs: dynamic and static

import { notFound } from 'next/navigation';

//* build static route
export async function generateStaticParams() {
  // const res = await fetch(...)
  // const data = await res.json()
  // return [...slugs]

  return [{ id: 'one' }, { id: 'two' }, { id: 'three' }, { id: 'four' }];
}

function page({ params }) {
  // if data from server is not found you can just return this:
  if (parseInt(params.id) === 1) {
    notFound();
  }

  return <div>Params ID: {params.id}</div>;
}

export default page;
