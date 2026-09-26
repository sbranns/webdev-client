import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h3>Samuel Brannstrom</h3>
      <ul>
        <li>
          <Link href="/labs">Home</Link>
        </li>
        <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Kambaz</Link>
        </li>
        <li>
          <Link id="wd-toc-book-link" href="/book/ch1">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}
