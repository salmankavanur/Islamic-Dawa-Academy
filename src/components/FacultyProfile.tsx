type FacultyProfileProps = {
  name: string;
  designation: string;
  department: string;
  isHead?: boolean;
  education: string[];
  specialization: string;
  imageSrc: string;
  bio: string;
};

const FacultyProfile = ({
  name,
  designation,
  department,
  isHead = false,
  education,
  specialization,
  imageSrc,
  bio,
}: FacultyProfileProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
          <img
            src={imageSrc}
            alt={name}
            width={300}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="p-6 md:w-2/3">
        <div className="flex flex-wrap items-center mb-2">
          <h3 className="text-xl font-bold text-gray-900 mr-3">{name}</h3>
          {isHead && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Department Head
            </span>
          )}
        </div>
        <p className="text-green-700 font-medium mb-1">{designation}</p>
        <p className="text-gray-500 text-sm mb-3">{department}</p>

        <p className="text-gray-700 mb-4">{bio}</p>

        <div className="space-y-2">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Education</h4>
            <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Specialization</h4>
            <p className="text-sm text-gray-600">{specialization}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
