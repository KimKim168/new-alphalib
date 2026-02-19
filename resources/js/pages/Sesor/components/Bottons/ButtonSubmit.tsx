import { useState } from 'react';
import { ButtonAttachCv } from '../Bottons/ButtonAttachCV';
import { Button } from '@/components/ui/button';
import Loader from './Loader';

const CareerPostDetail = () => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleApply = () => {
    if (!selectedFile) {
      alert('Please attach your CV first!');
      return;
    }

    setLoading(true); // show loader

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted with file:', selectedFile);
      setLoading(false); // hide loader
      setSuccess(true);

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 2000); 
  };

  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex gap-4">
        <ButtonAttachCv
          titleButton="Attach CV"
        />

        <Button
          onClick={handleApply}
          disabled={loading}
          className="rounded-full bg-white px-8 py-2 text-[15px] font-manrope-regular text-primary transition hover:bg-gray-200 disabled:opacity-50"
        >
          {loading ? <Loader /> : 'Apply'}
        </Button>
      </div>

      {success && (
        <p className="text-green-500 font-manrope-semi-bold mt-2">
          Application submitted successfully!
        </p>
      )}

      {/* Full-screen loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default CareerPostDetail;
