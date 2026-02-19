import React from 'react';

const StudentIdCard = () => {
  // Static data for the Minimalist Theme
  const studentData = {
    name: "Maya Lee",
    id: "M10293847",
    major: "Software Engineering",
    photoUrl: "https://via.placeholder.com/150/F97316/FFFFFF?text=ML", // Orange accent
    schoolName: "The Innovation School",
    schoolLogoUrl: "https://via.placeholder.com/50/FFFFFF/F97316?text=IS",
    validUntil: "2028/06/30",
  };

  const { name, id, major, photoUrl, schoolName, schoolLogoUrl, validUntil } = studentData;

  return (
    <div className="flex items-center justify-center p-4 min-h-screen bg-white">
      {/* ID Card Container: Minimalist White with Orange Accent */}
      <div className="w-80 h-auto bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-orange-500 transition duration-300 hover:shadow-2xl">
        
        {/* Header/School Logo Section */}
        <div className="p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">{schoolName || 'University Name'}</h2>
          <img 
            src={schoolLogoUrl || 'default_logo.png'} 
            alt="School Logo" 
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Profile/Main Info Section */}
        <div className="px-6 pb-6 pt-4 text-center">
          <img 
            src={photoUrl || 'default_avatar.png'} 
            alt={`Photo of ${name}`} 
            className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-orange-100 shadow-inner mb-4"
          />
          <h1 className="text-3xl font-extrabold text-gray-900 truncate tracking-tighter">{name || 'Student Name'}</h1>
          <p className="text-md text-orange-500 font-semibold mt-1 uppercase">{major || 'Major of Study'}</p>
        </div>

        {/* Details Section */}
        <div className="p-6 bg-gray-50 border-t border-b border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">ID Number:</span>
            <span className="text-lg font-extrabold text-orange-600">{id || 'M00000000'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-500">Valid Until:</span>
            <span className="text-sm font-bold text-green-600">{validUntil || '2028/06/30'}</span>
          </div>
        </div>

        {/* Footer/Motto Area */}
        <div className="p-4 text-center text-xs text-gray-400">
          <p className="italic">Excellence in Innovation.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentIdCard;