import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link className='text-white font-bold' href={'/'}>
        CRUD.
      </Link>
      <Link className='bg-white px-4 py-2 rounded-md' href={'/add-topic'}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
