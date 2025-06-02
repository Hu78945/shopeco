"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SlidersHorizontal } from "lucide-react"
import FilterSidebar from "./filter-sidebar"

export default function MobileFilters() {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle><span className="sr-only"> Filters</span></SheetTitle>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[80vh]">
                <div className="p-4 h-full overflow-y-auto">
                    <FilterSidebar />
                </div>
            </SheetContent>
        </Sheet>
    )
}
