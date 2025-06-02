import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tag } from "lucide-react"

interface OrderSummaryProps {
    subtotal: number
    discount: number
    discountPercentage: number
    deliveryFee: number
    total: number
}

export default function OrderSummary({
    subtotal,
    discount,
    discountPercentage,
    deliveryFee,
    total,
}: OrderSummaryProps) {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            {/* Summary Items */}
            <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">${subtotal}</span>
                </div>

                <div className="flex justify-between text-red-500">
                    <span>Discount (-{discountPercentage}%)</span>
                    <span className="font-medium">-${discount}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="font-medium">${deliveryFee}</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total}</span>
                </div>
            </div>

            {/* Promo Code */}
            <div className="mb-6">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input placeholder="Add promo code" className="pl-10 bg-gray-50 border-gray-200" />
                    </div>
                    <Button variant="default" className="bg-black text-white hover:bg-gray-800 px-6 rounded-full">
                        Apply
                    </Button>
                </div>
            </div>

            {/* Checkout Button */}
            <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 text-base font-medium rounded-full">
                Go to Checkout →
            </Button>
        </div>
    )
}
