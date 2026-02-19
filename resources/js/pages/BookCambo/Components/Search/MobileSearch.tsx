import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Search } from "lucide-react"
import CamboSearch from "./CamboSearch"
import CamboMobileSearch from "./Search"

export function MobileSearch() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size='icon'><Search/></Button>
      </SheetTrigger>
      <SheetContent side="top">
            <CamboMobileSearch/>
      </SheetContent>
    </Sheet>
  )
}
