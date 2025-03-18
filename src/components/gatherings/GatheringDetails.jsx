// components/gatherings/GatheringDetails.jsx
import Link from "next/link";
import BiblePassagesList from "./BiblePassagesList";
import GatheringInfoGrid from "./GatheringInfoGrid";

export default function GatheringDetails({ gathering }) {
  const { title, description, quote, biblePassages, resourceLink, details } = gathering;

  return (
    <div className="mb-6">
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      
      {quote && (
        <div className="bg-gray-100 p-4 mb-4 text-gray-800 border-l-4 border-cor-gold italic">
          <p>{quote.text}</p>
          {quote.source && <div className="text-right mt-2 text-sm">- {quote.source}</div>}
        </div>
      )}
      
      {description && <p className="mb-4">{description}</p>}
      
      {biblePassages && biblePassages.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Bible passages</h4>
          <BiblePassagesList passages={biblePassages} />
        </div>
      )}
      
      {resourceLink && (
        <div className="text-cor-blue mb-6">
          {resourceLink.text}: <Link href={resourceLink.url} className="hover:underline">{resourceLink.text.split(": ")[1]}</Link>
        </div>
      )}
      
      {details && <GatheringInfoGrid details={details} />}
    </div>
  );
}