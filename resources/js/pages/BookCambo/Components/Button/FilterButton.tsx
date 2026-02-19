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
import ResourceSidebar from "../Sidebar/ResourceSidebar"

export function FilterButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="xl:hidden block ">
           <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-funnel border size-11 p-2 rounded-md" type="button" aria-haspopup="dialog" aria-expanded="true" aria-controls="radix-:rr:" data-state="open"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg></button>
      </SheetTrigger>
      <SheetContent >
        <ResourceSidebar />
      </SheetContent>
    </Sheet>
  )
}
