// components/gatherings/UpcomingGatherings.jsx
export default function UpcomingGatherings({ gatherings }) {
    return (
      <div>
        {gatherings.map((gathering, index) => (
          <div key={index} className="flex mb-4 items-start">
            <div className="bg-cor-navy text-white min-w-16 p-2 text-center rounded-sm mr-4">
              <div className="text-xs font-medium">{gathering.date.day}</div>
              <div className="text-xs">{gathering.date.month}</div>
            </div>
            <div className="font-semibold">{gathering.title}</div>
          </div>
        ))}
      </div>
    );
  }