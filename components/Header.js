// import Link from "next/link";
import "@/styles/globals.css";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <header className="pic">
        {/* <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/serverside">ServerSide</Link>
      </li> */}

        <div className="pic2">
          {" "}
          <Image
            src="/koreanboy2.avif" // Image path from the public folder
            alt="Profile Picture"
            width={600}
            height={400}
          />
        </div>
      </header>
    </div>
  );
}
