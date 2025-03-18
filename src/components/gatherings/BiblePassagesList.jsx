// components/gatherings/BiblePassagesList.jsx
import Link from "next/link";

export default function BiblePassagesList({ passages }) {
  return (
    <ul className="list-disc list-inside space-y-1 text-cor-blue">
      {passages.map((passage, index) => (
        <li key={index}>
          <Link 
            href={passage.url} 
            target="_blank" 
            className="hover:text-cor-brown"
          >
            {passage.reference}
          </Link>
        </li>
      ))}
    </ul>
  );
}