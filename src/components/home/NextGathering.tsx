// components/home/NextGathering.jsx
import Link from "next/link";
import CalendarIcon from "@/components/icons/CalendarIcon";
import GatheringDetails from "@/components/gatherings/GatheringDetails";
import UpcomingGatherings from "@/components/gatherings/UpcomingGatherings";

export default function NextGathering() {
  const currentGathering = {
    title: "Session 8: Jesus - Crucified Savior Part 2",
    description: "This is part 2. We will be discussing the Applying Scripture questions on pages 75-76. Please (re)read the bible passages before the gathering.",
    quote: {
      text: "This sacrifice of Christ is unique; it completes and surpasses all other sacrifices. First, it is a gift from God the Father himself, for the Father handed his Son over to sinners in order to reconcile us with himself. At the same time it is the offering of the Son of God made man, who in freedom and love offered his life to his Father through the Holy Spirit in reparation for our disobedience.",
      source: "Catechism of the Catholic Church. 614"
    },
    biblePassages: [
      { reference: "John 3:16-17", url: "https://www.biblegateway.com/passage/?search=John%203%3A16-17&version=NRSVCE" },
      { reference: "John 15:12-17", url: "https://www.biblegateway.com/passage/?search=John%2015%3A12-17&version=NRSVCE" },
      { reference: "Matthew 16: 21-23", url: "https://www.biblegateway.com/passage/?search=Matthew%2016%3A%2021-23&version=NRSVCE" },
      { reference: "Matthew 26:26-29", url: "https://www.biblegateway.com/passage/?search=Matthew%2026%3A26-29&version=NRSVCE" },
      { reference: "Matthew 26:36-44", url: "https://www.biblegateway.com/passage/?search=Matthew%2026%3A36-44&version=NRSVCE" },
      { reference: "Luke 23:33-46", url: "https://www.biblegateway.com/passage/?search=Luke%2023%3A33-46&version=NRSVCE" }
    ],
    resourceLink: {
      text: "Session 8 from Book: Jesus - Crucified Savior",
      url: "/images/Gathering/Session%208%20Jesus%20-%20Crucified%20Savior.pdf"
    },
    details: {
      location: "St. Joan of Arc Catholic Church, Arvada, CO\nLorraine Room (next to Orleans Hall)",
      date: "March 18, 2025",
      time: "06:30PM - 08:00PM",
      contact: "Jason Pasionek\n(720) 207-4693"
    }
  };

  const upcomingGatherings = [
    {
      date: { day: "18", month: "Mar" },
      title: "Session 8: Jesus - Crucified Savior Part 2"
    },
    {
      date: { day: "01", month: "Apr" },
      title: "Lent Special Gathering - Lectio Divina & Liturgy of the Hours"
    },
    {
      date: { day: "15", month: "Apr" },
      title: "Session 9 - Lectio Divina - The Blessed Man"
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">
                <CalendarIcon className="h-6 w-6" />
              </span>
              Next Gathering
            </h2>

            <GatheringDetails gathering={currentGathering} />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Upcoming</h3>
            <p className="mb-4 text-gray-700 italic">Cor gatherings are on the <strong>3rd Tuesday</strong> of the month.</p>

            <p className="mb-4">Special Lent gathering April 1, 2025</p>

            <UpcomingGatherings gatherings={upcomingGatherings} />

            <h3 className="text-xl font-bold mb-3 mt-6">Previous</h3>
            <Link href="/past-gatherings" className="text-cor-blue hover:text-cor-brown">
              Past Gatherings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}