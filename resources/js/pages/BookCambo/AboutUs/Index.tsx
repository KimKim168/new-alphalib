import React from 'react';
import BookCamboLayout from '../BookCamboLayout';
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <BookCamboLayout>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="max-w-screen-2xl w-full mx-auto flex flex-col lg:flex-row px-3 py-5 md:py-8 sm:px-10 xl:px-20 min-h-screen">
          {/* Left: Text */}
          <div className="flex-1 pb-4 flex flex-col  pr-0 lg:pr-12">
            <Badge className="bg-[#104674] dark:text-white dark:bg-[#3aa3ff] text-base rounded-full py-1 border-none">
              About us
            </Badge>
            <h1 className="mt-3 text-xl md:text-xl xl:text-xl font-medium !leading-[1.2] tracking-tight">
              Customized Shadcn UI Blocks & Components
            </h1>
            <p className="mt-2 text-lg">
              Explore a collection of Shadcn UI blocks and components, ready to
              preview and copy. Streamline your development workflow with
              easy-to-implement examples.
            </p>
          </div>

          {/* Right: Banner */}
          <div className="w-full lg:w-96 h-screen">
            <img
              src="/assets/sample_images/banners/library_banner.jpg"
              className="h-full w-full object-cover "
              alt="Library Banner"
            />
          </div>
        </div>
      </div>
    </BookCamboLayout>
  );
};

export default Index;
