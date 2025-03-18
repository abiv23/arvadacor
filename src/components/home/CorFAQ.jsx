// components/home/CorFAQ.jsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CorFAQ() {
  const faqItems = [
    {
      question: "What is Cor?",
      answer: <p>The mission of <span className="italic">Cor</span> is to refocus Catholic men on Jesus Christ and to form and strengthen them in faith and virtue through a brotherhood committed to prayer, formation, and fraternity.</p>
    },
    {
      question: "Why Cor?",
      answer: (
        <>
          <p className="mb-4">Because families need strong husbands, fathers, sons, and brothers, and the world needs courageous witnesses to Jesus Christ. <span className="italic">Cor</span> provides Catholic men the opportunity to encounter Christ, pray together, and strengthen their bonds of brotherhood, preparing them for courageous leadership and the mission of evangelization for their families and communities.</p>
          <p className="mb-4">If we want to grow our relationship with God, to grow our faith, to become more like Christ, we must intentionally work toward these goals.</p>
          <p><span className="italic">Cor</span> is here to help us in that effort. A <span className="italic">Cor</span> gathering is an intentional time and space meant to enable men to come together in brotherhood, invest in their personal faith and formation, to sharpen each other as iron sharpens iron, to pray together, and to build a fraternity of Christ-centered friendships and experiences.</p>
        </>
      )
    },
    {
      question: "Where did the name come from?",
      answer: <p>The word <span className="italic">cor</span> is Latin for heart and the root of the word courage. The inspiration for this name is drawn from the expression <span className="italic">cor ad cor loquitur</span>, heart speaks to heart. This phrase was the episcopal motto of St. John Henry Newman.</p>
    },
    {
      question: "What's the catch?",
      answer: (
        <>
          <p className="mb-2">There is none. There's no cost, no commitment.</p>
          <p>Come to a <span className="italic">Cor</span> gathering and discover if it's right for you.</p>
        </>
      )
    },
    {
      question: "Who can come and participate?",
      answer: (
        <>
          <p className="mb-4">All men of the St. Joan of Arc parish are encouraged to attend.</p>
          <p><span className="italic">Cor</span> is for men who have a desire to be strengthened in faith and virtue, to increase their knowledge and love of God and neighbor, and to develop bonds of Christ-centered brotherhood.</p>
        </>
      )
    },
    {
      question: "What if I've missed previous gatherings?",
      answer: (
        <>
          <p className="mb-2">New attendees are always welcome.</p>
          <p>The sessions are designed to allow men to join at any time - you do not need to wait for a particular starting point.</p>
        </>
      )
    },
    {
      question: "Are there any prerequisites?",
      answer: (
        <>
          <p className="mb-2">None other than being a Catholic man (18+).</p>
          <p><span className="italic">Cor</span> is for all men of the parish regardless of background, Catholic education, or knowledge.</p>
        </>
      )
    },
    {
      question: "What can I expect?",
      answer: (
        <>
          <p className="mb-4">Each <span className="italic">Cor</span> gathering must have the 3 key elements of prayer, formation, and fraternity. The ratio of emphasis on one key element over the others can vary and depends on the direction of our clergy and input from the group.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Expect that you won't need to have memorized specific prayers or have mastery of any topic.</li>
            <li>Expect to encounter men in all stages of spiritual life. We are all here to learn and to grow as Catholic men and to deepen our relationship with Jesus Christ.</li>
            <li>Expect to participate in small group discussion. Everyone should contribute and no individual should dominate the conversation.</li>
            <li>Expect a safe and supportive environment where everyone's questions and perspectives are welcome. Some disagreements or misunderstandings can be expected. When this occurs, it should be done respectfully and with love of neighbor.</li>
            <li>Expect gatherings to start and end on time. To help achieve that goal, everyone is responsible for staying on topic and for being a timekeeper.</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Cor Frequently Asked Questions</h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}