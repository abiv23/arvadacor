// components/home/HeartSpeaksToHeart.jsx
import Image from "next/image";
import CoreValueCard from "./CoreValueCard";

export default function HeartSpeaksToHeart() {
  const coreValues = [
    {
      title: "Prayer",
      content: [
        "Through prayer, we encounter Christ and animate our faith and relationship with him.",
        "Shared time in prayer will help men focus their minds and hearts on God and give depth and life to formation and fraternal brotherhood. Like all relationships, prayer requires commitment and consistency."
      ]
    },
    {
      title: "Formation",
      content: [
        "Alongside prayer, formation helps increase our knowledge and love of God and of neighbor. Intentional and structured times of formation help direct fraternity toward the shared pursuit of Christ, of holiness, and a life of faith and missionary discipleship. Formation requires the animation of prayer and the accountability of fraternity.",
        "Formation is life-long and requires an intentional commitment."
      ]
    },
    {
      title: "Fraternity",
      content: [
        "Fraternity is not just friendship or hanging out, it is a true brotherhood centered on Christ. This type of brotherhood has depth and trust, where men sharpen one another and accompany each other as disciples of Christ. Brotherhood made up of Christ-centered friendships is necessary for men to grow in holiness, as leaders, and as missionary disciples.",
        "Like prayer and formation, fraternity must be intentional, requires proximity and consistency, and the shared mission of evangelization."
      ]
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:flex items-center gap-8">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <Image
              src="/images/heart-cor.webp"
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
              {coreValues.map((value, index) => (
                <CoreValueCard key={index} title={value.title} content={value.content} />
              ))}
            </div>

            <div className="mt-8 text-center font-semibold italic">
              <p>Cor supports and is in service to our parish mission of leading souls, through love or battle, to Christ the true King.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}