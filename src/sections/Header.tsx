import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-center fixed w-full z-10 top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur" >
      <Link className="nav-item" href={""}>Home</Link>
      <Link className="nav-item" href={""}>Projects</Link>
      <Link className="nav-item" href={""}>About</Link>
      <Link className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href={""}>Contact</Link>
    </nav>
    </div>
  );
};
