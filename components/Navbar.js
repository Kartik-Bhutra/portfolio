import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center text-lg font-semibold text-[#e5e5e5] bg-[#282829] rounded-tr-2xl rounded-bl-2xl h-full shadow-md">
      <Link
        href="/"
        className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
      >
        About Me
      </Link>
      <Link
        href="/project"
        className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
      >
        Project
      </Link>
      <Link
        href="/hobby"
        className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
      >
        Hobbies
      </Link>
      <Link
        href="/contact"
        className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"
      >
        Contact
      </Link>
    </nav>
  );
}
