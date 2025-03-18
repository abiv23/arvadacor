import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Past Gatherings - Arvada Cor",
  description: "Archive of previous Cor gatherings at St. Joan of Arc Parish in Arvada, Colorado."
};

// Helper function to format date
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function PastGatherings() {
  // Past gatherings data (in reverse chronological order)
  const gatherings = [
    {
      date: "2025-03-18",
      title: "Session 8: Jesus - Crucified Savior Part 2",
      quote: "This sacrifice of Christ is unique; it completes and surpasses all other sacrifices. First, it is a gift from God the Father himself, for the Father handed his Son over to sinners in order to reconcile us with himself. At the same time it is the offering of the Son of God made man, who in freedom and love offered his life to his Father through the Holy Spirit in reparation for our disobedience.",
      quoteSource: "Catechism of the Catholic Church. 614",
      description: "This is part 2. We will be discussing the Applying Scripture questions on pages 75-76. Please (re)read the bible passages before the gathering.",
      biblePassages: [
        { text: "John 3:16-17", url: "https://www.biblegateway.com/passage/?search=John%203%3A16-17&version=NRSVCE" },
        { text: "John 15:12-17", url: "https://www.biblegateway.com/passage/?search=John%2015%3A12-17&version=NRSVCE" },
        { text: "Matthew 16: 21-23", url: "https://www.biblegateway.com/passage/?search=Matthew%2016%3A%2021-23&version=NRSVCE" },
        { text: "Matthew 26:26-29", url: "https://www.biblegateway.com/passage/?search=Matthew%2026%3A26-29&version=NRSVCE" },
        { text: "Matthew 26:36-44", url: "https://www.biblegateway.com/passage/?search=Matthew%2026%3A36-44&version=NRSVCE" },
        { text: "Luke 23:33-46", url: "https://www.biblegateway.com/passage/?search=Luke%2023%3A33-46&version=NRSVCE" },
      ],
      materials: [
        { text: "Jesus - Crucified Savior", url: "/images/Gathering/Session%208%20Jesus%20-%20Crucified%20Savior.pdf" }
      ]
    },
    {
      date: "2025-02-18",
      title: "Session 8: Jesus - Crucified Savior",
      quote: "This sacrifice of Christ is unique; it completes and surpasses all other sacrifices. First, it is a gift from God the Father himself, for the Father handed his Son over to sinners in order to reconcile us with himself. At the same time it is the offering of the Son of God made man, who in freedom and love offered his life to his Father through the Holy Spirit in reparation for our disobedience.",
      quoteSource: "Catechism of the Catholic Church. 614",
      biblePassages: [
        { text: "John 3:16-17", url: "https://www.biblegateway.com/passage/?search=John%203%3A16-17&version=NRSVCE" },
        { text: "John 15:12-17", url: "https://www.biblegateway.com/passage/?search=John%2015%3A12-17&version=NRSVCE" },
        { text: "Matthew 16: 21-23", url: "https://www.biblegateway.com/passage/?search=Matthew%2016%3A%2021-23&version=NRSVCE" },
        { text: "Matthew 26:26-29", url: "https://www.biblegateway.com/passage/?search=Matthew%2026%3A26-29&version=NRSVCE" },
        { text: "Matthew 26:36-44", url: "https://www.biblegateway.com/passage/?search=Matthew%2026%3A36-44&version=NRSVCE" },
        { text: "Luke 23:33-46", url: "https://www.biblegateway.com/passage/?search=Luke%2023%3A33-46&version=NRSVCE" },
      ],
      materials: [
        { text: "Jesus - Crucified Savior", url: "/images/Gathering/Session%208%20Jesus%20-%20Crucified%20Savior.pdf" }
      ]
    },
    {
      date: "2025-01-21",
      title: "Session 7: Jesus - Incarnate Teacher, Part 2",
      quote: "All Jesus did, said. and suffered had for its aim restoring fallen man to his original vocation.",
      quoteSource: "Catechism of the Catholic Church. 518",
      description: "Please (re)read the Bible passages before the meeting and bring your Bible (physical or electronic) as we might be reading additional scripture passages.",
      biblePassages: [
        { text: "Mark 1:14-20", url: "https://www.biblegateway.com/passage/?search=Mark%201%3A14-20&version=NRSVCE" },
        { text: "Matthew 5:1-12", url: "https://www.biblegateway.com/passage/?search=Matthew%205%3A1-12&version=NRSVCE" },
        { text: "Luke 10:25-28", url: "https://www.biblegateway.com/passage/?search=Luke%2010:25-28&version=NRSVCE" },
        { text: "Mark 8:34-38", url: "https://www.biblegateway.com/passage/?search=Mark%208:34-38&version=NRSVCE" },
        { text: "John 14:1-14", url: "https://www.biblegateway.com/passage/?search=John%2014:1-14&version=NRSVCE" },
      ],
      materials: [
        { text: "Jesus - Incarnate Teacher", url: "/images/Gathering/Session%207%20Jesus%20%20Incarnate%20Teacher.pdf" }
      ]
    },
    {
      date: "2024-12-17",
      title: "Session 7: Jesus - Incarnate Teacher",
      quote: "All Jesus did, said. and suffered had for its aim restoring fallen man to his original vocation.",
      quoteSource: "Catechism of the Catholic Church. 518",
      description: "Please bring your Bible (physical or electronic) as we'll be reading scripture passages.",
      biblePassages: [
        { text: "Mark 1:14-20", url: "https://www.biblegateway.com/passage/?search=Mark%201%3A14-20&version=NRSVCE" },
        { text: "Matthew 5:1-12", url: "https://www.biblegateway.com/passage/?search=Matthew%205%3A1-12&version=NRSVCE" },
        { text: "Luke 10:25-28", url: "https://www.biblegateway.com/passage/?search=Luke%2010:25-28&version=NRSVCE" },
        { text: "Mark 8:34-38", url: "https://www.biblegateway.com/passage/?search=Mark%208:34-38&version=NRSVCE" },
        { text: "John 14:1-14", url: "https://www.biblegateway.com/passage/?search=John%2014:1-14&version=NRSVCE" },
      ],
      materials: [
        { text: "Jesus - Incarnate Teacher", url: "/images/Gathering/Session%207%20Jesus%20%20Incarnate%20Teacher.pdf" }
      ]
    },
    {
      date: "2024-11-19",
      title: "Lectio Divina - The Fallen Man",
      description: "The Latin phrase lectio divina may be translated as divine reading. Lectio divina is a method for praying with the Scriptures. As one reads and invites the Word to become a transforming lens that brings the events of daily living into focus, one can come to live more deeply and find the presence of God more readily in the events of each day.",
      quote: "Christian prayer tries above all to meditate on the mysteries of Christ, as in lectio divina or the rosary.",
      quoteSource: "CCC 2708",
      additionalInfo: "If you have a chance, please review pages vi-viii for an overview of what to expect.",
      biblePassages: [
        { text: "Genesis 3:1-24", url: "https://www.biblegateway.com/passage/?search=Genesis%203%3A1-24&version=NRSVCE" }
      ],
      materials: [
        { text: "Lectio Divina", url: "/images/Gathering/Lectio%20Divina.pdf" },
        { text: "Lectio Divina - The Fallen Man", url: "/images/Gathering/Session%206%20Lectio%20Divina%20-%20The%20Fallen%20Man.pdf" }
      ]
    }
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-cor-brown">Home</Link>
          <span className="mx-2">/</span>
          <span>Past Gatherings</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Past Gatherings</h1>

        <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-8">
          <p className="text-lg">Events for</p>
          <h2 className="text-2xl font-bold text-cor-navy">Through {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h2>
        </div>

        {/* List of past gatherings */}
        <div className="space-y-10">
          {gatherings.map((gathering, index) => (
            <div key={index} className="border-b border-gray-200 pb-10">
              <div className="text-gray-600 mb-2">{formatDate(gathering.date)}</div>

              <h3 className="text-xl font-bold mb-4">{gathering.title}</h3>

              {gathering.quote && (
                <div className="bg-gray-100 p-4 mb-4 text-gray-800 border-l-4 border-cor-gold italic">
                  <p>{gathering.quote}</p>
                  {gathering.quoteSource && (
                    <div className="text-right mt-2 text-sm">{gathering.quoteSource}</div>
                  )}
                </div>
              )}

              {gathering.description && (
                <p className="mb-4">{gathering.description}</p>
              )}

              {gathering.additionalInfo && (
                <p className="mb-4">{gathering.additionalInfo}</p>
              )}

              {gathering.biblePassages && gathering.biblePassages.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Bible passages</h4>
                  <ul className="list-disc list-inside space-y-1 text-cor-blue">
                    {gathering.biblePassages.map((passage, i) => (
                      <li key={i}>
                        <Link href={passage.url} target="_blank" className="hover:text-cor-brown">
                          {passage.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {gathering.materials && gathering.materials.length > 0 && (
                <div className="text-cor-blue">
                  {gathering.materials.map((material, i) => (
                    <div key={i} className="mb-1">
                      {i === 0 && gathering.materials.length === 1 && "Session from Book: "}
                      {i === 0 && gathering.materials.length > 1 && "Session Resources: "}
                      <Link href={material.url} className="hover:underline">
                        {material.text}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
