import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Cor - Arvada Cor",
  description: "Learn more about Cor, a Catholic men's ministry at St. Joan of Arc Parish in Arvada, Colorado focused on prayer, formation, and fraternity."
};

export default function About() {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-cor-brown">Home</Link>
          <span className="mx-2">/</span>
          <span>About</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">About Cor</h1>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-cor-navy">Our Mission</h2>
            <p className="mb-6 text-lg">
              <span className="font-semibold italic">Cor</span> exists to form and strengthen Catholic men in faith and virtue as missionary disciples by drawing them into a deeper relationship with Jesus Christ through prayer, formation, and fraternity.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-10 text-cor-navy">Our Name</h2>
            <p className="mb-4">
              The word <span className="italic">cor</span> is Latin for "heart" and the root of the word "courage." The inspiration for this name is drawn from the expression <span className="italic">cor ad cor loquitur</span>, heart speaks to heart. This phrase was the episcopal motto of St. John Henry Newman.
            </p>
            <p className="mb-4">
              Our approach to spiritual growth centers on authentic heart-to-heart encounters: between each man and Christ, between brothers in faith, and between each man and those he is called to serve.
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-10 text-cor-navy">Our Structure</h2>
            <p className="mb-4">
              Each <span className="italic">Cor</span> gathering includes three essential elements:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-5 rounded-md">
                <h3 className="font-bold text-lg mb-3">Prayer</h3>
                <p>
                  Through prayer, we encounter Christ and animate our faith and relationship with him. Prayer is foundational to our gatherings.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-md">
                <h3 className="font-bold text-lg mb-3">Formation</h3>
                <p>
                  Formation increases our knowledge and love of God and neighbor, directing us toward the shared pursuit of Christ and holiness.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-md">
                <h3 className="font-bold text-lg mb-3">Fraternity</h3>
                <p>
                  True brotherhood centered on Christ, where men sharpen one another and accompany each other as disciples of Christ.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-10 text-cor-navy">Our Gatherings</h2>
            <p className="mb-4">
              <span className="italic">Cor</span> gatherings are held on the <strong>3rd Tuesday</strong> of every month from 6:30-8:00 PM at St. Joan of Arc Catholic Church in Arvada, CO (Lorraine Room).
            </p>
            <p className="mb-4">
              There is no cost to attend, and new men are always welcome to join at any point. The only prerequisite is being a Catholic man (18+) with a desire to grow in faith.
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-8">
              <div className="bg-cor-navy text-white p-5 rounded-md mb-6">
                <h3 className="font-bold text-lg mb-3">Join Us</h3>
                <p className="mb-4">
                  All men of the St. Joan of Arc parish are invited to join our monthly gatherings. No reservation needed - simply show up!
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-1">Next Gathering:</h4>
                  <p>March 18, 2025</p>
                  <p>6:30-8:00 PM</p>
                  <p>St. Joan of Arc Catholic Church</p>
                  <p>Lorraine Room</p>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-md">
                <h3 className="font-bold text-lg mb-3">Contact</h3>
                <p className="mb-2">For more information about Cor:</p>
                <p className="mb-1"><span className="font-semibold">Jason Pasionek</span></p>
                <p className="mb-4">(720) 207-4693</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 italic">
          <p className="text-lg">"Cor supports and is in service to our parish mission of leading souls, through love or battle, to Christ the true King."</p>
        </div>
      </div>
    </div>
  );
}
