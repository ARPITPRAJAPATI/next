import Link from "next/link";

const Navbar = () => {
  return (
    <header className="grid grid-cols-2 p-4">
      <div>arush</div>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/about">About</Link>
          </li>

          <li>
            <Link href="/service">Service</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;