export default function Navbar() {
  return (
    <nav className="flex justify-around items-center text-lg font-semibold text-[#e5e5e5] bg-[#282829] rounded-tr-2xl rounded-bl-2xl h-full shadow-md">
      <div className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">About Me</div>
      <div className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">Project</div>
      <div className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">Hobbies</div>
      <div className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">Contact</div>
    </nav>
  );
}
