import Link from "next/link";

export default function BreadcrumbNav() {
  return (
    <nav className="text-white font-extralight text-lg">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="text-gray-400 font-extralight hover:underline">
            Accueil
          </Link>
        </li>
        <span>{"|"}</span>
        <li>
          <Link href="/services" className="text-white font-black hover:underline">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
}