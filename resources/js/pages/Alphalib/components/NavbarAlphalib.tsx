import { LanguageSwitcher } from "@/pages/Sesor/components/LanguageSwitcher";
import { Logo } from "./Logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import SwitchDarkMode3D from "@/components/Switch/SwitchDarkMode3D";

const NavbarAlphalib = () => {

    return (
    <nav className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="mx-auto flex h-full section-container items-center justify-between px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center gap-12">
          <Logo />
          {/* Desktop Menu */}
        </div>

        <div className="flex items-center gap-3">
          <NavMenu className="hidden lg:block" />
          <LanguageSwitcher/>
          <SwitchDarkMode3D/>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
    );
};

export default NavbarAlphalib;