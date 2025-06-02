"use client"

import { Minus, Plus, Trash2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CartItemProps {
    id: string
    image: string
    title: string
    size: string
    color: string
    price: number
    quantity: number
    onQuantityChange: (id: string, quantity: number) => void
    onRemove: (id: string) => void
}

export default function CartItem({
    id,
    image,
    title,
    size,
    color,
    price,
    quantity,
    onQuantityChange,
    onRemove,
}: CartItemProps) {
    return (
        <div className="flex gap-4 p-4 border-b border-gray-100">
            {/* Product Image */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{title}</h3>
                        <div className="text-xs md:text-sm text-gray-500 mt-1">
                            <p>Size: {size}</p>
                            <p>Color: {color}</p>
                        </div>
                    </div>

                    {/* Remove Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemove(id)}
                        className="text-red-500 hover:text-red-700 p-1"
                    >
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>

                {/* Price and Quantity Controls */}
                <div className="flex justify-between items-center mt-3">
                    <span className="font-bold text-gray-900 text-sm md:text-base">${price}</span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onQuantityChange(id, Math.max(1, quantity - 1))}
                            className="w-6 h-6 p-0 hover:bg-gray-200 rounded-full"
                        >
                            <Minus className="w-3 h-3" />
                        </Button>

                        <span className="text-sm font-medium min-w-[20px] text-center">{quantity}</span>

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onQuantityChange(id, quantity + 1)}
                            className="w-6 h-6 p-0 hover:bg-gray-200 rounded-full"
                        >
                            <Plus className="w-3 h-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
