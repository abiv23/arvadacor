// components/gatherings/GatheringInfoGrid.jsx
export default function GatheringInfoGrid({ details }) {
    const { location, date, time, contact } = details;
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-100 p-3">
          <h4 className="font-bold mb-1">Location</h4>
          <p className="text-sm whitespace-pre-line">{location}</p>
        </div>
        <div className="bg-gray-100 p-3">
          <h4 className="font-bold mb-1">Date</h4>
          <p className="text-sm">{date}</p>
        </div>
        <div className="bg-gray-100 p-3">
          <h4 className="font-bold mb-1">Time</h4>
          <p className="text-sm">{time}</p>
        </div>
        <div className="bg-gray-100 p-3">
          <h4 className="font-bold mb-1">Contact</h4>
          <p className="text-sm whitespace-pre-line">{contact}</p>
        </div>
      </div>
    );
  }