import type React from "react"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function FilterSidebar() {
    return (
        <div className="space-y-6">
            <div className="font-medium text-lg">Filters</div>

            <FilterAccordion title="T-shirts" defaultOpen>
                <FilterCheckbox id="tshirts" label="T-shirts" count={7} />
            </FilterAccordion>

            <FilterAccordion title="Shirts">
                <FilterCheckbox id="shirts" label="Shirts" count={5} />
            </FilterAccordion>

            <FilterAccordion title="Style">
                <FilterCheckbox id="style" label="Style" count={3} />
            </FilterAccordion>

            <FilterAccordion title="Hoods">
                <FilterCheckbox id="hoods" label="Hoods" count={4} />
            </FilterAccordion>

            <FilterAccordion title="Jeans">
                <FilterCheckbox id="jeans" label="Jeans" count={6} />
            </FilterAccordion>

            <FilterAccordion title="Price" defaultOpen>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-sm">$0</span>
                        <span className="text-sm">$200</span>
                    </div>
                    <Slider defaultValue={[100]} max={200} step={1} />
                </div>
            </FilterAccordion>

            <FilterAccordion title="Colors" defaultOpen>
                <div className="grid grid-cols-6 gap-2">
                    {["green", "red", "orange", "yellow", "blue", "purple", "pink", "black"].map((color) => (
                        <div
                            key={color}
                            className="w-8 h-8 rounded-full cursor-pointer border hover:ring-2 hover:ring-offset-1 hover:ring-black"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </FilterAccordion>

            <FilterAccordion title="Size" defaultOpen>
                <div className="grid grid-cols-3 gap-2">
                    {["XS (Small)", "S (Small)", "Small", "Medium", "M-Large", "Large", "XL-Large", "2X-Large", "3X-Large"].map(
                        (size) => (
                            <div
                                key={size}
                                className="text-xs border rounded-full px-3 py-1 text-center cursor-pointer hover:bg-muted"
                            >
                                {size}
                            </div>
                        ),
                    )}
                </div>
            </FilterAccordion>

            <FilterAccordion title="Dress Style">
                <FilterCheckbox id="casual" label="Casual" count={12} />
                <FilterCheckbox id="formal" label="Formal" count={8} />
                <FilterCheckbox id="party" label="Party" count={5} />
                <FilterCheckbox id="gym" label="Gym" count={3} />
            </FilterAccordion>

            <Button className="w-full">Apply Filter</Button>
        </div>
    )
}

interface FilterAccordionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

function FilterAccordion({ title, children, defaultOpen }: FilterAccordionProps) {
    return (
        <Accordion type="single" collapsible defaultValue={defaultOpen ? title : undefined}>
            <AccordionItem value={title} className="border-b">
                <AccordionTrigger className="text-sm font-medium">{title}</AccordionTrigger>
                <AccordionContent>{children}</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

interface FilterCheckboxProps {
    id: string
    label: string
    count: number
}

function FilterCheckbox({ id, label, count }: FilterCheckboxProps) {
    return (
        <div className="flex items-center space-x-2 py-1">
            <Checkbox id={id} />
            <Label htmlFor={id} className="text-sm flex-1 cursor-pointer">
                {label}
            </Label>
            <span className="text-xs text-muted-foreground">{count}</span>
        </div>
    )
}
