import React from "react";

const Index = () => {
  const data = {
    name: "Lily Adams",
    title: "Content Writer",
    id: "LA-5566",
    phone: "+855 94 777 222",
    email: "lily@mail.com",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="relative w-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" className=""><g fill="#000"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></g></svg>

        <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={data.img}
            alt={data.name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        <div className="mt-24 text-center px-6">
          <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
          <p className="text-gray-500">{data.title}</p>
        </div>

        <div className="mt-4 px-6 pb-6 text-sm text-gray-700 space-y-1">
          <p><strong>ID:</strong> {data.id}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
          <p><strong>Email:</strong> {data.email}</p>
        </div>

        <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
