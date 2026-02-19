import React from 'react';
import Layout from '../Layout';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import GoogleMap from '../components/GoogleMap';

const Index = () => {
  const item = {
    title: 'វិចិត្រសិល្បៈទាន់សម័យ',
    image: '/assets/buddhist/books/book1.jpg',
    description:
      'សៀវភៅនេះបង្ហាញពីសិល្បៈទំនើប និងគំនិតប្លែកៗ ដែលបានបង្កើតដោយសិល្បករ ស្ទើរតែជាផ្នែកនៃសង្គមសិល្បៈទំនើប។',
    author: 'សូរ្យា កុមារ',
    date: '2025-09-18',
    category: 'សិល្បៈ',
  };

  const contactItems = [
    {
      icon: <MailIcon className="w-5 h-5 text-primary" />,
      title: 'Email',
      content: <Link href="mailto:sorsokny@gmail.com" className="text-gray-700">sorsokny@gmail.com</Link>,
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-primary" />,
      title: 'Phone',
      content: <span className="text-gray-700">+855 12 345 678</span>,
    },
   
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto my-10 px-4 flex flex-col md:flex-row gap-8">
        {/* Left Column: Content */}
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
            <span>អ្នកនិពន្ធ: {item.author}</span>
            <span>កាលបរិច្ឆេទ: {item.date}</span>
            <span>ប្រភេទ: {item.category}</span>
          </div>

          <div className="mb-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-video object-cover rounded-lg"
            />
          </div>

          <p className="text-gray-700">{item.description}</p>
        </div>

        {/* Right Column: Contact & Social */}
        <div className="flex-1 p-4 space-y-6">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          {contactItems.map((item, idx) => (
            <div key={idx} className="flex items-center border-t border-[#8b262b] border-dashed space-x-3">
              {item.icon}
              <div className='mt-6'>
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
          <GoogleMap/>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
