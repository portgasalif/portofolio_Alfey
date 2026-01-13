import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-bold">
            Alif
          </Link>

          <div className="flex gap-8">
            <Link href="/projects" className="hover:text-blue-500">
              Projects
            </Link>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
