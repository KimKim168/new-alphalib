import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';

const languages = [
   {
    value: 'kh',
    label: 'Khmer',
    flag: '/assets/book_cambo/khmer.png',

  },
  {
    value: 'en',
    label: 'English',
    flag: '/assets/book_cambo/english.png',
  },
 
];

export function ThnalLanguage() {
  const { locale } = usePage().props;
  const [value, setValue] = useState(locale || 'kh');
  return (
    <div className="flex gap-3">
      {languages.map((lang) => (
        <Link key={lang.value} href={`/lang/${lang.value}`}>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setValue(lang.value)}
            className={`p-1 border transition-all bg-white/10 backdrop-blur-sm ${
              value === lang.value
                ? 'border-yellow-500 dark:border-yellow-500 border-2'
                : ''
            } hover:border-yellow-300`}
          >
            <img
              src={lang.flag}
              alt={lang.label}
              className="h-full w-full rounded-full object-cover"
            />
          </Button>
        </Link>
      ))}
    </div>
  );
}
