// components/home/CoreValueCard.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function CoreValueCard({ title, content }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        {content.map((paragraph, index) => (
          <p key={index} className={`text-gray-700 ${index > 0 ? 'mt-2' : ''}`}>
            {paragraph}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}