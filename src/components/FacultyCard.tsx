import Image from "next/image";

interface FacultyCardProps {
  name: string;
  designation: string;
  department: string;
  isHead?: boolean;
  specialization: string;
  education: string[];
  imageSrc: string;
  bio: string;
}

const FacultyCard = ({
  name,
  designation,
  department,
  isHead = false,
  specialization,
  education,
  imageSrc,
  bio,
}: FacultyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <div className="aspect-w-4 aspect-h-3 w-full h-64 relative">
          <Image
            src={imageSrc}
            alt={`Prof. ${name}`}
            fill
            className="object-cover"
          />
        </div>

        {isHead && (
          <div className="absolute top-4 right-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
            Department Head
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-green-700 font-medium mb-1">{designation}</p>
        <p className="text-gray-500 text-sm mb-3">{department}</p>

        <div className="border-t border-gray-100 pt-3 mb-3">
          <p className="text-sm text-gray-600 mb-1">
            <span className="font-medium">Specialization:</span> {specialization}
          </p>
          <div className="text-sm text-gray-600">
            <p className="font-medium mb-1">Education:</p>
            <ul className="pl-4 space-y-1 list-disc">
              {education.map((degree, index) => (
                <li key={index}>{degree}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-3">{bio}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
