import { Suspense } from "react"
import ProductGrid from "@/components/product-category/product-grid"
import FilterSidebar from "@/components/product-category/filter-sidebar"
import MobileFilters from "@/components/product-category/mobile-filters"
import { products } from "../data/mockData"

export default function CategoryPage() {
    return (
        <div className="container px-2 sm:px-8 py-6 mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Casual</h1>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden sm:block">Showing 1-12 of 100 Products</span>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-sm">Sort by:</span>
                        <select className="text-sm border rounded-md px-2 py-1">
                            <option>Most Popular</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-4 gap-8">
                <div className="hidden lg:block">
                    <FilterSidebar />
                </div>
                <div className="lg:col-span-3">
                    <div className="block lg:hidden mb-4">
                        <MobileFilters />
                    </div>
                    <Suspense fallback={<div>Loading products...</div>}>
                        <ProductGrid products={products} />
                    </Suspense>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md bg-primary text-white">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">5</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md border">&gt;</button>
            </div>
        </div>
    )
}
