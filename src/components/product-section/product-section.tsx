import Link from "next/link";
import Productcard from "../product-card/product-card";

export type Product = {
    id?: string | number;
    image?: string;
    title?: string;
    price?: number;
    rating?: number;
    discountedPrice?: number;
    discountPercentage?: number;
};

interface ProductSectionProps {
    title?: string;
    products?: Product[];
    className?: string;
    maxItems?: number;
    onViewAll: () => void
}

// Generic ProductSection component
const ProductSection = ({
    title = "NEW ARRIVALS",
    products = [],
    className = "",
    maxItems = 4,
    onViewAll
}: ProductSectionProps) => {
    const displayProducts = products.slice(0, maxItems);

    return (
        <div className={`container mx-auto px-2 sm:px-6 py-8 ${className}`}>
            {/* Section Heading */}
            <div className="text-center mb-8 md:mb-12">
                <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight">
                    {title}
                </h1>
            </div>

            {/* Products Grid - Desktop */}
            <div className="hidden md:flex justify-center gap-6 flex-wrap">
                {displayProducts.map((product, index) => (
                    <Link key={product.id} href="/product/1">
                        <Productcard
                            key={product.id || index}
                            image={product.image || ""}
                            title={product.title || ""}
                            price={product.price ?? 0}
                            rating={product.rating}
                            discountedPrice={product.discountedPrice}
                            discountPercentage={product.discountPercentage}
                        />
                    </Link>
                ))}
            </div>

            {/* Products Scroll - Mobile */}
            <div className="md:hidden">
                <div className=" ml-2 grid grid-cols-2 gap-2 sm:flex sm:gap-1 sm:overflow-x-auto sm:pb-4 sm:scrollbar-hide">
                    {displayProducts.map((product, index) => (
                        <div key={product.id || index} className="sm:flex-shrink-0 sm:w-64">
                            <Link href="/product/1">
                                <Productcard
                                    image={product.image || ""}
                                    title={product.title || ""}
                                    price={product.price ?? 0}
                                    rating={product.rating}
                                    discountedPrice={product.discountedPrice}
                                    discountPercentage={product.discountPercentage}
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* View All Button - Mobile */}
                {onViewAll && (
                    <div className="text-center mt-6">
                        <button
                            onClick={onViewAll}
                            className="bg-white border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
                        >
                            View All
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductSection