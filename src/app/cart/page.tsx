"use client"

import { useState } from "react"
import CartItem from "@/components/cart/cart-item"
import OrderSummary from "@/components/cart/order-summary"

interface CartProduct {
    id: string
    image: string
    title: string
    size: string
    color: string
    price: number
    quantity: number
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartProduct[]>([
        {
            id: "1",
            image: "/images/image 8 (2).png",
            title: "Gradient Graphic T-shirt",
            size: "Large",
            color: "White",
            price: 145,
            quantity: 1,
        },
        {
            id: "2",
            image: "/images/image 8.png",
            title: "Checkered Shirt",
            size: "Medium",
            color: "Red",
            price: 180,
            quantity: 1,
        },
        {
            id: "3",
            image: "/images/image 9 (2).png",
            title: "Skinny Fit Jeans",
            size: "Large",
            color: "Blue",
            price: 240,
            quantity: 1,
        },
    ])

    const handleQuantityChange = (id: string, newQuantity: number) => {
        setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }

    const handleRemoveItem = (id: string) => {
        setCartItems((items) => items.filter((item) => item.id !== id))
    }

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const discountPercentage = 20
    const discount = Math.round(subtotal * (discountPercentage / 100))
    const deliveryFee = 15
    const total = subtotal - discount + deliveryFee

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Page Title */}
                <h1 className="font-extrabold text-3xl md:text-4xl text-gray-900 tracking-tight mb-8">YOUR CART</h1>

                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    {/* Cart Items - Mobile: full width, Desktop: 2/3 width */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                            {cartItems.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">Your cart is empty</div>
                            ) : (
                                <div className="divide-y divide-gray-100">
                                    {cartItems.map((item) => (
                                        <CartItem
                                            key={item.id}
                                            {...item}
                                            onQuantityChange={handleQuantityChange}
                                            onRemove={handleRemoveItem}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Order Summary - Mobile: full width below cart, Desktop: 1/3 width */}
                    <div className="mt-8 lg:mt-0">
                        <OrderSummary
                            subtotal={subtotal}
                            discount={discount}
                            discountPercentage={discountPercentage}
                            deliveryFee={deliveryFee}
                            total={total}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
