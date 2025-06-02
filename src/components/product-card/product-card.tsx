import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />)
    }

    // Half star
    if (hasHalfStar) {
        stars.push(
            <div key="half" className="relative">
                <Star className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />
                <div className="absolute inset-0 overflow-hidden w-1/2">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                </div>
            </div>,
        )
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<Star key={`empty-${i}`} className="w-3 h-3 md:w-4 md:h-4 text-gray-300" />)
    }

    return stars
}

interface ProductCardProps {
    image: string
    title: string
    price: number
    rating?: number
    discountedPrice?: number
    discountPercentage?: number
}

const Productcard = ({
    image,
    title,
    price,
    rating,
    discountedPrice,
    discountPercentage,
}: ProductCardProps) => {
    return (
        <>
            <div>
                {/* Image container*/}
                <div className='w-[158px] h-[200px] sm:w-[295px] sm:h-[298px] rounded-lg relative overflow-hidden'>
                    <Image
                        alt={title}
                        src={image}
                        fill
                        className='object-cover'
                    />
                </div>

                {/* Info  + Rating + Price */}
                <div className='flex flex-col pt-0.5 justify-between items-left gap-2'>
                    <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{title}</h3>
                    {rating && (
                        <div className="flex items-center gap-1">
                            <div className="flex items-center gap-0.5">{renderStars(3)}</div>
                            <span className="text-sm font-medium text-gray-600 ml-1">{3}/5</span>
                        </div>
                    )}
                    {/* Pricing */}
                    <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl font-bold text-gray-900">${discountedPrice || price}</span>

                        {/* Original price and discount - Only show if discounted */}
                        {discountedPrice && (
                            <>
                                <span className="text-sm sm:text-lg text-gray-500 line-through">${price}</span>
                                {discountPercentage && (
                                    <span className="text-sm font-medium text-red-500">-{discountPercentage}%</span>
                                )}
                            </>
                        )}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Productcard