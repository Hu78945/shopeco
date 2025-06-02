import Productcard from "../product-card/product-card"
import { Product } from "../product-section/product-section"

interface ProductGridProps {
    products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <>
            {/* Mobile view - 2 columns */}
            <div className="md:hidden">
                <div className="grid grid-cols-2 gap-1 px-1">
                    {products.map((product) => (
                        <div key={product.id}>
                            <Productcard
                                image={product.image || "/placeholder.svg?height=400&width=400"}
                                title={product.title || ""}
                                price={product.price ?? 0}
                                rating={product.rating}
                                discountedPrice={product.discountedPrice}
                                discountPercentage={
                                    product.discountPercentage
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop view - 3 columns */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id}>
                        <Productcard
                            image={product.image || "/placeholder.svg?height=400&width=400"}
                            title={product.title || ""}
                            price={product.price ?? 0}
                            rating={product.rating}
                            discountedPrice={product.discountedPrice}
                            discountPercentage={
                                product.discountPercentage
                            }
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
