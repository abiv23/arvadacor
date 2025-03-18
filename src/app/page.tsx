import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Mission Statement Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-lg italic text-gray-700 max-w-4xl mx-auto">
            <span className="font-semibold">Cor</span> exists to form and strengthen Catholic men in faith and virtue as missionary disciples by drawing them into a deeper relationship with Jesus Christ through prayer, formation, and fraternity.
          </p>
        </div>
      </section>

      {/* Welcome Banner */}
      <section className="py-6 bg-cor-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Welcoming All Men of the St. Joan of Arc Parish
          </h2>
        </div>
      </section>

      {/* Next Gathering Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                Next Gathering
              </h2>

              <div className="mb-6">
                <h3 className="font-bold text-lg mb-1">Session 8: Jesus - Crucified Savior Part 2</h3>
                <div className="bg-gray-100 p-4 mb-4 text-gray-800 border-l-4 border-cor-gold italic">
                  <p>This sacrifice of Christ is unique; it completes and surpasses all other sacrifices. First, it is a gift from God the Father himself, for the Father handed his Son over to sinners in order to reconcile us with himself. At the same time it is the offering of the Son of God made man, who in freedom and love offered his life to his Father through the Holy Spirit in reparation for our disobedience.</p>
                  <div className="text-right mt-2 text-sm">- Catechism of the Catholic Church. 614</div>
                </div>

                <p className="mb-4">This is part 2. We will be discussing the <strong>Applying Scripture</strong> questions on pages 75-76. Please (re)read the bible passages before the gathering.</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Bible passages</h4>
                  <ul className="list-disc list-inside space-y-1 text-cor-blue">
                    <li><Link href="https://www.biblegateway.com/passage/?search=John%203%3A16-17&version=NRSVCE" target="_blank" className="hover:text-cor-brown">John 3:16-17</Link></li>
                    <li><Link href="https://www.biblegateway.com/passage/?search=John%2015%3A12-17&version=NRSVCE" target="_blank" className="hover:text-cor-brown">John 15:12-17</Link></li>
                    <li><Link href="https://www.biblegateway.com/passage/?search=Matthew%2016%3A%2021-23&version=NRSVCE" target="_blank" className="hover:text-cor-brown">Matthew 16: 21-23</Link></li>
                    <li><Link href="https://www.biblegateway.com/passage/?search=Matthew%2026%3A26-29&version=NRSVCE" target="_blank" className="hover:text-cor-brown">Matthew 26:26-29</Link></li>
                    <li><Link href="https://www.biblegateway.com/passage/?search=Matthew%2026%3A36-44&version=NRSVCE" target="_blank" className="hover:text-cor-brown">Matthew 26:36-44</Link></li>
                    <li><Link href="https://www.biblegateway.com/passage/?search=Luke%2023%3A33-46&version=NRSVCE" target="_blank" className="hover:text-cor-brown">Luke 23:33-46</Link></li>
                  </ul>
                </div>

                <div className="text-cor-blue mb-6">
                  Session 8 from Book: <Link href="/images/Gathering/Session%208%20Jesus%20-%20Crucified%20Savior.pdf" className="hover:underline">Jesus - Crucified Savior</Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-gray-100 p-3">
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-sm">St. Joan of Arc Catholic Church, Arvada, CO<br />Lorraine Room (next to Orleans Hall)</p>
                  </div>
                  <div className="bg-gray-100 p-3">
                    <h4 className="font-bold mb-1">Date</h4>
                    <p className="text-sm">March 18, 2025</p>
                  </div>
                  <div className="bg-gray-100 p-3">
                    <h4 className="font-bold mb-1">Time</h4>
                    <p className="text-sm">06:30PM - 08:00PM</p>
                  </div>
                  <div className="bg-gray-100 p-3">
                    <h4 className="font-bold mb-1">Contact</h4>
                    <p className="text-sm">Jason Pasionek<br />(720) 207-4693</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Upcoming</h3>
              <p className="mb-4 text-gray-700 italic">Cor gatherings are on the <strong>3rd Tuesday</strong> of the month.</p>

              <p className="mb-4">Special Lent gathering April 1, 2025</p>

              <div className="flex mb-4 items-start">
                <div className="bg-cor-navy text-white min-w-16 p-2 text-center rounded-sm mr-4">
                  <div className="text-xs font-medium">18</div>
                  <div className="text-xs">Mar</div>
                </div>
                <div className="font-semibold">Session 8: Jesus - Crucified Savior Part 2</div>
              </div>

              <div className="flex mb-4 items-start">
                <div className="bg-cor-navy text-white min-w-16 p-2 text-center rounded-sm mr-4">
                  <div className="text-xs font-medium">01</div>
                  <div className="text-xs">Apr</div>
                </div>
                <div className="font-semibold">Lent Special Gathering - Lectio Divina & Liturgy of the Hours</div>
              </div>

              <div className="flex mb-4 items-start">
                <div className="bg-cor-navy text-white min-w-16 p-2 text-center rounded-sm mr-4">
                  <div className="text-xs font-medium">15</div>
                  <div className="text-xs">Apr</div>
                </div>
                <div className="font-semibold">Session 9 - Lectio Divina - The Blessed Man</div>
              </div>

              <h3 className="text-xl font-bold mb-3 mt-6">Previous</h3>
              <Link href="/past-gatherings" className="text-cor-blue hover:text-cor-brown">
                Past Gatherings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Heart Speaks to Heart Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <Image
                src="https://ext.same-assets.com/873439734/2893514053.webp"
                alt="Sacred Heart"
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4 text-cor-navy">Heart Speaks to Heart</h2>
              <p className="mb-4 italic">
                <span className="font-semibold">Cor</span>, is drawn from the motto of St. John Henry Newman, <span className="italic">Cor ad cor loquitur</span>, which is Latin for "Heart speaks to heart."
              </p>
              <p className="mb-4">
                The goal of each <span className="italic">Cor</span> gathering is to provide the opportunity for men to encounter Christ, to pray together, to be formed in their faith, and to strengthen their bonds of brotherhood, preparing them for courageous leadership and the <strong>mission of evangelization</strong> for their families and communities.
              </p>
              <p className="mb-4 font-semibold">
                Why? Because families need strong husbands, fathers, sons, and brothers, and the world needs courageous witnesses to Jesus Christ.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Prayer</h3>
                    <p className="text-gray-700">
                      Through prayer, we encounter Christ and animate our faith and relationship with him.
                    </p>
                    <p className="mt-2 text-gray-700">
                      Shared time in prayer will help men focus their minds and hearts on God and give depth and life to formation and fraternal brotherhood. Like all relationships, prayer requires commitment and consistency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Formation</h3>
                    <p className="text-gray-700">
                      Alongside prayer, formation helps increase our knowledge and love of God and of neighbor. Intentional and structured times of formation help direct fraternity toward the shared pursuit of Christ, of holiness, and a life of faith and missionary discipleship. Formation requires the animation of prayer and the accountability of fraternity.
                    </p>
                    <p className="mt-2 text-gray-700">
                      Formation is life-long and requires an intentional commitment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-3">Fraternity</h3>
                    <p className="text-gray-700">
                      Fraternity is not just friendship or hanging out, it is a true brotherhood centered on Christ. This type of brotherhood has depth and trust, where men sharpen one another and accompany each other as disciples of Christ. Brotherhood made up of Christ-centered friendships is necessary for men to grow in holiness, as leaders, and as missionary disciples.
                    </p>
                    <p className="mt-2 text-gray-700">
                      Like prayer and formation, fraternity must be intentional, requires proximity and consistency, and the shared mission of evangelization.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center font-semibold italic">
                <p>Cor supports and is in service to our parish mission of leading souls, through love or battle, to Christ the true King.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Cor Frequently Asked Questions</h2>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="what-is-cor">
                <AccordionTrigger className="text-left">What is Cor?</AccordionTrigger>
                <AccordionContent>
                  <p>The mission of <span className="italic">Cor</span> is to refocus Catholic men on Jesus Christ and to form and strengthen them in faith and virtue through a brotherhood committed to prayer, formation, and fraternity.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="why-cor">
                <AccordionTrigger className="text-left">Why Cor?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Because families need strong husbands, fathers, sons, and brothers, and the world needs courageous witnesses to Jesus Christ. <span className="italic">Cor</span> provides Catholic men the opportunity to encounter Christ, pray together, and strengthen their bonds of brotherhood, preparing them for courageous leadership and the mission of evangelization for their families and communities.</p>
                  <p className="mb-4">If we want to grow our relationship with God, to grow our faith, to become more like Christ, we must intentionally work toward these goals.</p>
                  <p><span className="italic">Cor</span> is here to help us in that effort. A <span className="italic">Cor</span> gathering is an intentional time and space meant to enable men to come together in brotherhood, invest in their personal faith and formation, to sharpen each other as iron sharpens iron, to pray together, and to build a fraternity of Christ-centered friendships and experiences.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="name-origin">
                <AccordionTrigger className="text-left">Where did the name come from?</AccordionTrigger>
                <AccordionContent>
                  <p>The word <span className="italic">cor</span> is Latin for heart and the root of the word courage. The inspiration for this name is drawn from the expression <span className="italic">cor ad cor loquitur</span>, heart speaks to heart. This phrase was the episcopal motto of St. John Henry Newman.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="the-catch">
                <AccordionTrigger className="text-left">What's the catch?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">There is none. There's no cost, no commitment.</p>
                  <p>Come to a <span className="italic">Cor</span> gathering and discover if it's right for you.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who-can-come">
                <AccordionTrigger className="text-left">Who can come and participate?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">All men of the St. Joan of Arc parish are encouraged to attend.</p>
                  <p><span className="italic">Cor</span> is for men who have a desire to be strengthened in faith and virtue, to increase their knowledge and love of God and neighbor, and to develop bonds of Christ-centered brotherhood.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="missed-gatherings">
                <AccordionTrigger className="text-left">What if I've missed previous gatherings?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">New attendees are always welcome.</p>
                  <p>The sessions are designed to allow men to join at any time - you do not need to wait for a particular starting point.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prerequisites">
                <AccordionTrigger className="text-left">Are there any prerequisites?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">None other than being a Catholic man (18+).</p>
                  <p><span className="italic">Cor</span> is for all men of the parish regardless of background, Catholic education, or knowledge.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="what-to-expect">
                <AccordionTrigger className="text-left">What can I expect?</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-4">Each <span className="italic">Cor</span> gathering must have the 3 key elements of prayer, formation, and fraternity. The ratio of emphasis on one key element over the others can vary and depends on the direction of our clergy and input from the group.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Expect that you won't need to have memorized specific prayers or have mastery of any topic.</li>
                    <li>Expect to encounter men in all stages of spiritual life. We are all here to learn and to grow as Catholic men and to deepen our relationship with Jesus Christ.</li>
                    <li>Expect to participate in small group discussion. Everyone should contribute and no individual should dominate the conversation.</li>
                    <li>Expect a safe and supportive environment where everyone's questions and perspectives are welcome. Some disagreements or misunderstandings can be expected. When this occurs, it should be done respectfully and with love of neighbor.</li>
                    <li>Expect gatherings to start and end on time. To help achieve that goal, everyone is responsible for staying on topic and for being a timekeeper.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
