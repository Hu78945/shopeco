/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@radix-ui/react-separator"
import ProductTabs from "../product-tabs/product-tabs"

interface ProductImage {
    id: string
    src: string
    alt: string
}

interface ColorOption {
    id: string
    name: string
    value: string
    colorClass: string
}

interface SizeOption {
    id: string
    name: string
    value: string
}

interface ProductDetailsProps {
    title: string
    rating: number
    reviewCount: number
    currentPrice: number
    originalPrice?: number
    discount?: number
    description: string
    images: ProductImage[]
    colors: ColorOption[]
    sizes: SizeOption[]
    defaultColor?: string
    defaultSize?: string
}

export default function ProductDetails({
    title = "ONE LIFE GRAPHIC T-SHIRT",
    rating = 4.4,
    reviewCount = 5,
    currentPrice = 260,
    originalPrice = 300,
    discount = 40,
    description = "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    images = [
        { id: "1", src: "/images/single/image 6.png", alt: "Product main view" },
        { id: "2", src: "/images/image 8 (2).png", alt: "Product view 2" },
        { id: "3", src: "/images/image 7.png", alt: "Product view 3" },
        { id: "4", src: "/images/image 10 (1).png", alt: "Product view 4" },
    ],
    colors = [
        { id: "olive", name: "Olive", value: "olive", colorClass: "bg-green-700" },
        { id: "black", name: "Black", value: "black", colorClass: "bg-black" },
        { id: "navy", name: "Navy", value: "navy", colorClass: "bg-blue-900" },
    ],
    sizes = [
        { id: "small", name: "Small", value: "S" },
        { id: "medium", name: "Medium", value: "M" },
        { id: "large", name: "Large", value: "L" },
        { id: "xlarge", name: "X-Large", value: "XL" },
    ],
    defaultColor = "olive",
    defaultSize = "large",
}: ProductDetailsProps) {
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [selectedColor, setSelectedColor] = useState(defaultColor)
    const [selectedSize, setSelectedSize] = useState(defaultSize)
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (change: number) => {
        setQuantity((prev) => Math.max(1, prev + change))
    }

    const renderStars = (rating: number) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
        }

        if (hasHalfStar) {
            stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
        }

        const remainingStars = 5 - Math.ceil(rating)
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />)
        }

        return stars
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    {/* Image Section */}
                    <div className="w-full max-w-2xl mx-auto p-4">
                        {/* Mobile Layout: Main image first, thumbnails below */}
                        <div className="block md:hidden space-y-4">
                            {/* Main Image */}
                            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={selectedImage.src || "/images/single/image 6.png"}
                                    alt={selectedImage.alt}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Thumbnail Images Below */}
                            <div className="grid grid-cols-4 gap-2">
                                {images.map((image) => (
                                    <button
                                        key={image.id}
                                        onClick={() => setSelectedImage(image)}
                                        className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage.id === image.id ? "border-black" : "border-transparent"
                                            }`}
                                    >
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Desktop Layout: Thumbnails on left, main image on right */}
                        <div className="hidden md:flex gap-4">
                            {/* Thumbnail Images on Left */}
                            <div className="flex flex-col gap-2 w-20">
                                {images.map((image) => (
                                    <button
                                        key={image.id}
                                        onClick={() => setSelectedImage(image)}
                                        className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${selectedImage.id === image.id ? "border-black" : "border-transparent"
                                            }`}
                                    >
                                        <Image
                                            src={image.src || "/placeholder.svg"}
                                            alt={image.alt}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image on Right */}
                            <div className="flex-1 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                <Image
                                    src={selectedImage.src || "/placeholder.svg"}
                                    alt={selectedImage.alt}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="space-y-6">
                        {/* Title and Rating */}
                        <div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 break-words">{title}</h1>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center">{renderStars(rating)}</div>
                                <span className="text-sm text-gray-600">{rating}/5</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            <span className="text-2xl sm:text-3xl font-bold text-gray-900">${currentPrice}</span>
                            {originalPrice && (
                                <>
                                    <span className="text-lg sm:text-xl text-gray-500 line-through">${originalPrice}</span>
                                    {discount && (
                                        <Badge variant="destructive" className="text-xs sm:text-sm">
                                            -{discount}%
                                        </Badge>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">{description}</p>

                        <Separator className="my-4 h-[1px] bg-gray-200" />

                        {/* Color Selection */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Select Colors</h3>
                            <div className="flex gap-2">
                                {colors.map((color) => (
                                    <Button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color.id)}
                                        className={` rounded-full border-2 transition-all ${selectedColor === color.id ? "border-gray-900 scale-110" : "border-gray-300"
                                            } ${color.colorClass}`}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>


                        <Separator className="my-4 h-[1px] bg-gray-200" />

                        {/* Size Selection */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-900 mb-3">Choose Size</h3>
                            <div className="flex gap-2">
                                {sizes.map((size) => (
                                    <Button
                                        key={size.id}
                                        onClick={() => setSelectedSize(size.id)}
                                        className={`px-4 py-2 border cursor-pointer rounded-full text-sm font-medium transition-colors ${selectedSize === size.id
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-900 border-gray-300 "
                                            }`}
                                    >
                                        {size.name}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                            <div className="flex items-center border border-gray-300 rounded-full w-fit">
                                <Button
                                    variant={"ghost"}
                                    onClick={() => handleQuantityChange(-1)}
                                    className="p-2  hover:bg-gray-100 transition-colors rounded-full"
                                    disabled={quantity <= 1}
                                >
                                    <Minus className="w-4 h-4" />
                                </Button>
                                <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                                <Button variant={"ghost"}
                                    onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-100 transition-colors rounded-full">
                                    <Plus className="w-4 h-4" />
                                </Button>
                            </div>

                            <Button className="flex-1 bg-black hover:bg-gray-800 rounded-full text-white py-3 text-base font-medium" size="lg">
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <ProductTabs />
        </>
    )
}
