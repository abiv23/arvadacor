import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Resources - Arvada Cor",
  description: "Spiritual resources and materials for Catholic men from Cor at St. Joan of Arc Parish in Arvada, Colorado."
};

export default function Resources() {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-cor-brown">Home</Link>
          <span className="mx-2">/</span>
          <span>Resources</span>
        </div>

        <h1 className="text-3xl font-bold mb-8">Resources</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-8 space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4 text-cor-navy">Quick Links</h2>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#prayers" className="text-cor-blue hover:text-cor-brown">
                        Prayers
                      </Link>
                    </li>
                    <li>
                      <Link href="#study-materials" className="text-cor-blue hover:text-cor-brown">
                        Study Materials
                      </Link>
                    </li>
                    <li>
                      <Link href="#mens-groups" className="text-cor-blue hover:text-cor-brown">
                        Men's Groups
                      </Link>
                    </li>
                    <li>
                      <Link href="#parish-resources" className="text-cor-blue hover:text-cor-brown">
                        Parish Resources
                      </Link>
                    </li>
                    <li>
                      <Link href="#recommended-books" className="text-cor-blue hover:text-cor-brown">
                        Recommended Books
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-cor-navy text-white">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Get Involved</h2>
                  <p className="mb-4">
                    Interested in joining Cor or learning more about our gatherings? Contact us or attend our next meeting!
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-4 py-2 bg-white text-cor-navy rounded hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-2 space-y-12">
            <section id="prayers">
              <h2 className="text-2xl font-bold mb-6 text-cor-navy flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                Prayers
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Litany of St. Joseph</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      A powerful prayer honoring St. Joseph, foster father of Jesus and patron of fathers, workers, and the universal Church.
                    </p>
                    <Link
                      href="https://www.usccb.org/prayers/litany-saint-joseph"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      View Prayer →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Litany of Humility</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      A prayer seeking the grace of humility and freedom from pride, authored by Cardinal Rafael Merry del Val.
                    </p>
                    <Link
                      href="https://www.ewtn.com/catholicism/devotions/litany-of-humility-245"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      View Prayer →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">How to Pray the Rosary</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      A guide to praying the Rosary, a cherished prayer that helps Catholics meditate on the mysteries of Christ's life.
                    </p>
                    <Link
                      href="/images/4772-guide-to-rosary.pdf"
                      target="_blank"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      View Guide →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Knight's Prayer</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      A prayer for Knights of Columbus members and all Catholic men striving to live as soldiers of Christ.
                    </p>
                    <Link
                      href="/images/Home/KnightsPrayerMobile.png"
                      target="_blank"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      View Prayer →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="study-materials">
              <h2 className="text-2xl font-bold mb-6 text-cor-navy flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Study Materials
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Session Materials</h3>
                    <p className="mb-3">
                      Materials from past Cor sessions are available for download and personal study:
                    </p>
                    <ul className="space-y-2 text-cor-blue">
                      <li>
                        <Link href="/images/Gathering/Session%208%20Jesus%20-%20Crucified%20Savior.pdf" className="hover:text-cor-brown">
                          Session 8: Jesus - Crucified Savior
                        </Link>
                      </li>
                      <li>
                        <Link href="/images/Gathering/Session%207%20Jesus%20%20Incarnate%20Teacher.pdf" className="hover:text-cor-brown">
                          Session 7: Jesus - Incarnate Teacher
                        </Link>
                      </li>
                      <li>
                        <Link href="/images/Gathering/Session%206%20Lectio%20Divina%20-%20The%20Fallen%20Man.pdf" className="hover:text-cor-brown">
                          Session 6: Lectio Divina - The Fallen Man
                        </Link>
                      </li>
                      <li>
                        <Link href="/images/Gathering/Lectio%20Divina.pdf" className="hover:text-cor-brown">
                          Guide to Lectio Divina
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Catholic Information Service</h3>
                    <p className="mb-3">
                      The Knights of Columbus Catholic Information Service offers excellent booklets on various aspects of Catholic faith and practice:
                    </p>
                    <ul className="space-y-2 text-cor-blue">
                      <li>
                        <Link href="https://www.kofc.org/en/resources/cis/cis115.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cor-brown">
                          Penance
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.kofc.org/en/resources/cis/cis118.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cor-brown">
                          How Catholics Pray
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.kofc.org/en/resources/who-we-are/our-faith/11443-men-of-the-word.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cor-brown">
                          Men of the Word: Scripture Study
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="mens-groups">
              <h2 className="text-2xl font-bold mb-6 text-cor-navy flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Men's Groups
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Knights of Columbus</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      A fraternal organization of Catholic men dedicated to charity, unity, fraternity, and patriotism.
                    </p>
                    <Link
                      href="https://kofc12392.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      Visit Website →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">That Man is You</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      An interactive program focused on the development of men in their roles as husbands and fathers.
                    </p>
                    <Link
                      href="https://paradisusdei.org/that-man-is-you/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      Visit Website →
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Exodus 90</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      A 90-day spiritual exercise for men that provides a path to freedom through prayer, asceticism, and fraternity.
                    </p>
                    <Link
                      href="https://app.exodus90.com/j/WUJLKAG-NTQGYAQ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cor-blue hover:text-cor-brown text-sm"
                    >
                      Join Exodus 90 →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            <section id="parish-resources">
              <h2 className="text-2xl font-bold mb-6 text-cor-navy flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                Parish Resources
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-lg mb-3">St. Joan of Arc</h3>
                      <p className="mb-4">Connect with our parish:</p>
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
                          <span className="font-semibold">Mass Times:</span> Visit the parish website for current schedule
                        </li>
                        <li>
                          <span className="font-semibold">Confession Times:</span> Visit the parish website for current schedule
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3">Archdiocese of Denver</h3>
                      <p className="mb-4">Connect with our archdiocese:</p>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            href="https://archden.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cor-blue hover:text-cor-brown"
                          >
                            Archdiocesan Website
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://denvercatholic.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cor-blue hover:text-cor-brown"
                          >
                            Denver Catholic News
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.formed.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cor-blue hover:text-cor-brown"
                          >
                            FORMED (Catholic Content)
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator />

            <section id="recommended-books">
              <h2 className="text-2xl font-bold mb-6 text-cor-navy flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Recommended Books
              </h2>
              <p className="mb-6">Books that have been valuable resources for men in our Cor community:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-1">Spiritual Reading</h3>
                    <ul className="space-y-2 mt-4">
                      <li><span className="font-medium">Introduction to the Devout Life</span> by St. Francis de Sales</li>
                      <li><span className="font-medium">The Imitation of Christ</span> by Thomas à Kempis</li>
                      <li><span className="font-medium">Story of a Soul</span> by St. Thérèse of Lisieux</li>
                      <li><span className="font-medium">True Devotion to Mary</span> by St. Louis de Montfort</li>
                      <li><span className="font-medium">The Way, Furrow, The Forge</span> by St. Josemaría Escrivá</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-1">Catholic Manhood</h3>
                    <ul className="space-y-2 mt-4">
                      <li><span className="font-medium">The Catholic Gentleman</span> by Sam Guzman</li>
                      <li><span className="font-medium">Manual for Men</span> by Bishop Thomas Olmsted</li>
                      <li><span className="font-medium">Into the Breach</span> by Bishop Thomas Olmsted</li>
                      <li><span className="font-medium">Padre Pio: Man of Hope</span> by Renzo Allegri</li>
                      <li><span className="font-medium">Saint Joseph and His World</span> by Mike Aquilina</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
