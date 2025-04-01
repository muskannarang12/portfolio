export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <a href="#" className="text-xl font-bold">My Portfolio</a>
          <div className="space-x-4">
            <a href="#projects" className="hover:text-blue-300">Projects</a>
            <a href="#skills" className="hover:text-blue-300">Skills</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </nav>
    )
  }