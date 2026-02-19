import React from 'react'
import BookCamboLayout from '../BookCamboLayout'
import { Mail, MapPin, Phone } from 'lucide-react'
import GoogleMap from '../Components/GoogleMap'

const Index = () => {
  return (
    <BookCamboLayout>
      <div className="mx-auto flex flex-col items-center px-4 border-t">
        <h2 className="text-primary dark:text-[#2b9cff] text-center font-medium text-xl mt-10 ">
          Contact Us
        </h2>
        <p className="mb-5 max-w-3xl text-center text-lg dark:text-gray-400 text-gray-700 sm:text-xldark:text-gray-200">
          Let’s connect and explore how we can help achieve your business goals.
        </p>
      </div>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:px-20">
        {/* Email */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
          <div className="rounded-full bg-primary p-4 text-white">
            <Mail className="h-8 w-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Our Email</h4>
            <p className="text-gray-600">info@bookcambo.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
          <div className="rounded-full bg-primary p-4 text-white">
            <Phone className="h-8 w-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
            <p className="text-gray-600">+855 12 345 678</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
          <div className="rounded-full bg-primary p-4 text-white">
            <MapPin className="h-8 w-8" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Address</h4>
            <p className="text-gray-600">
              #123, Street 456, Phnom Penh, Cambodia
            </p>
          </div>
        </div>
      </div>
      <GoogleMap/>
    </BookCamboLayout>
  )
}

export default Index
