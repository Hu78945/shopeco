'use client'

import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const HeroCarousel = () => {
    const slides = [
        {
            src: "/images/MARWA_RTW_2_WEB_1024x1366.webp",
            alt: "Slide 1",
        },
        {
            src: "/images/Ayeza_Sale_Web_1024x1366.webp",
            alt: "Slide 2",
        },
        {
            src: "/images/4739023.jpg",
            alt: "Slide 3",
        },
    ]

    return (
        <div className="h-[60vh] sm:h-[80vh] w-full relative">
            <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="relative h-full w-full">
                            <div className="relative h-[60vh] sm:h-[80vh] w-full  overflow-hidden">
                                <Image
                                    fill
                                    src={slide.src}
                                    alt={slide.alt}
                                    priority
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 100vw, 100vw"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
            </Carousel>
        </div>
    )
}

export default HeroCarousel
