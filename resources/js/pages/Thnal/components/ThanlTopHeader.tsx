import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useInitials } from '@/hooks/use-initials';
import { Link, usePage } from '@inertiajs/react';
import { ThnalLanguage } from './ThnalLanguage';
import { LogIn, UserPlus } from 'lucide-react';
import SwitchDarkMode3D from '@/components/Switch/SwitchDarkMode3D';

const ThnalTopHeader = () => {
  const getInitials = useInitials();
  const { auth } = usePage().props;

  return (
    <div className="bg-[#08151e] px-4 py-2 sm:px-6 md:px-10 xl:px-20">
      <div className="text-foreground mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between lg:justify-end gap-4 text-sm">

        {/* Left Section (Language Switcher) */}
        <div className="flex gap-3 items-center">
          <div>
            <SwitchDarkMode3D/>
          </div>
          <div className="flex-shrink-0">
            <ThnalLanguage />
          </div>
        </div>

        {/* Right Section (Login + Register / Profile) */}
        <div className="flex min-w-0 flex-wrap items-center justify-end gap-3">

          {auth?.user ? (
            <Link prefetch href="/dashboard">
              <Avatar className="size-8 bg-true-primary-six overflow-hidden rounded-full">
                <AvatarImage
                  src={`/assets/images/users/thumb/${auth?.user?.image}`}
                  alt={auth?.user?.name}
                />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                  {getInitials(auth?.user?.name)}
                </AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
                {/* Register */}
              <Link prefetch href="/register2">
                <Button variant="outline" size='icon' className="text-primary">
                  <UserPlus className="h-4 w-4" stroke="#0471c1" />
                </Button>
              </Link>
              {/* Login */}
              <Link prefetch href="/login">
                <Button variant="outline" size='icon' className="text-primary">
                  <LogIn className="h-4 w-4" stroke="#0471c1" />
                </Button>
              </Link>

              
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThnalTopHeader;
