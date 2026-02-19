import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

interface ButtonAttachCvProps {
  titleButton: string;
}

export const ButtonAttachCv = ({ titleButton }: ButtonAttachCvProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // open file dialog
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);

      // If file is an image, create preview URL
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={handleClick}
        className="rounded-full bg-white px-8 py-2 text-[15px] font-manrope-regular text-primary transition hover:bg-gray-200"
      >
        {titleButton}
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif" 
      />

      {selectedFile && (
        <div className="flex items-center gap-2 mt-2">
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Preview"
              className="h-16 w-16 object-cover rounded-md border"
            />
          )}
          <p className="text-white font-manrope-semi-bold text-sm">
            {selectedFile.name}
          </p>
        </div>
      )}
    </div>
  );
};
