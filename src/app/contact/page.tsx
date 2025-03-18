import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact - Arvada Cor",
  description: "Contact information for Cor, a Catholic men's ministry at St. Joan of Arc Parish in Arvada, Colorado."
};

export default function Contact() {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-cor-brown">Home</Link>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-cor-navy">Get in Touch</h2>
            <p className="mb-6">
              If you have questions about Cor or would like more information about our gatherings, please feel free to reach out to our coordinator:
            </p>

            <Card className="mb-8">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4">Jason Pasionek</h3>
                <p className="mb-2">
                  <span className="font-semibold">Phone:</span> (720) 207-4693
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Email:</span> info@arvadacor.org
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-6 text-cor-navy mt-12">Location</h2>
            <p className="mb-6">
              Cor gatherings are held at St. Joan of Arc Catholic Church in Arvada, Colorado.
            </p>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4">St. Joan of Arc Catholic Church</h3>
                <p className="mb-2">12735 W 58th Ave</p>
                <p className="mb-2">Arvada, CO 80002</p>
                <p className="mb-6">(Gatherings are held in the Lorraine Room)</p>
                <div className="mt-4">
                  <Link
                    href="https://www.google.com/maps/place/St.+Joan+of+Arc+Catholic+Church/@39.8023985,-105.1422023,17z/data=!3m1!4b1!4m6!3m5!1s0x876b866f2ceb88eb:0xad11c67a5e42c2e9!8m2!3d39.8023944!4d-105.1396274!16s%2Fm%2F02rlp0v?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cor-blue hover:text-cor-brown"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-cor-navy">Join Us</h2>
            <p className="mb-6">
              All men of the St. Joan of Arc parish are welcome to join our gatherings. No registration or prior experience is required!
            </p>

            <Card className="mb-8 bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4">Meeting Schedule</h3>
                <p className="mb-2">
                  <span className="font-semibold">Regular Gatherings:</span> 3rd Tuesday of each month
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Time:</span> 6:30 PM - 8:00 PM
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Location:</span> Lorraine Room (next to Orleans Hall)
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold mb-6 text-cor-navy mt-12">Parish Information</h2>
            <div className="space-y-4">
              <p>
                Cor is a ministry of St. Joan of Arc Catholic Church. For more information about the parish:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.stjoanarvada.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cor-blue hover:text-cor-brown"
                  >
                    Parish Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/stjoanarvada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cor-blue hover:text-cor-brown"
                  >
                    Parish Facebook
                  </Link>
                </li>
                <li>
                  <span className="font-semibold">Parish Phone:</span> (303) 420-1232
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
