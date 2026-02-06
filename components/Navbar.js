import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4 flex justify-center items-center gap-10 font-bold text-black">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <input 
        type="text" 
        placeholder="search" 
        className="px-2 py-1 rounded border-none outline-none text-black font-normal bg-white"
      />
    </nav>
  );
};

export default Navbar;
