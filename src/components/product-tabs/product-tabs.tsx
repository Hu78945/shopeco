"use client"

import { useState } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MoreHorizontal, CheckCircle, Filter } from "lucide-react"

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState("reviews")

    const reviews = [
        {
            id: 1,
            name: "Samantha D.",
            verified: true,
            rating: 5,
            text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail in the stitching and overall construction.",
            date: "August 14, 2023",
        },
        {
            id: 2,
            name: "Alex M.",
            verified: true,
            rating: 4,
            text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I'm very picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
            date: "August 15, 2023",
        },
        {
            id: 3,
            name: "Ethan R.",
            verified: false,
            rating: 4,
            text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see this designer's touch in every aspect of this shirt.",
            date: "August 16, 2023",
        },
        {
            id: 4,
            name: "Olivia P.",
            verified: true,
            rating: 4,
            text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
            date: "August 17, 2023",
        },
        {
            id: 5,
            name: "Liam K.",
            verified: true,
            rating: 5,
            text: "This shirt is a fusion of comfort and creativity. The fabric is soft and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
            date: "August 18, 2023",
        },
        {
            id: 6,
            name: "Ava H.",
            verified: true,
            rating: 4,
            text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
            date: "August 19, 2023",
        },
    ]

    const faqs = [
        {
            question: "What materials is this product made from?",
            answer:
                "This t-shirt is made from 100% premium cotton with a soft, breathable weave that ensures comfort and durability.",
        },
        {
            question: "How should I care for this item?",
            answer:
                "Machine wash cold with like colors. Tumble dry low or hang dry. Do not bleach or iron directly on the design.",
        },
        {
            question: "What sizes are available?",
            answer:
                "We offer sizes from XS to XXL. Please refer to our size chart for detailed measurements to ensure the perfect fit.",
        },
        {
            question: "Do you offer international shipping?",
            answer:
                "Yes, we ship worldwide. Shipping costs and delivery times vary by location. Please check our shipping policy for more details.",
        },
    ]

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))
    }

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <div className="w-full border-b border-gray-200 mb-8">
                    <div className="flex justify-center">
                        <div className="flex space-x-8 md:space-x-16">
                            <Button
                                variant={"ghost"}
                                onClick={() => setActiveTab("details")}
                                className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors relative ${activeTab === "details" ? "text-black" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Product Details
                                {activeTab === "details" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
                            </Button>
                            <Button
                                variant={"ghost"}
                                onClick={() => setActiveTab("reviews")}
                                className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors relative ${activeTab === "reviews" ? "text-black" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                Rating & Reviews
                                {activeTab === "reviews" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
                            </Button>
                            <Button
                                variant={"ghost"}
                                onClick={() => setActiveTab("faqs")}
                                className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors relative ${activeTab === "faqs" ? "text-black" : "text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                FAQs
                                {activeTab === "faqs" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />}
                            </Button>
                        </div>
                    </div>
                </div>

                {activeTab === "details" && (
                    <TabsContent value="details" className="mt-0">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">Product Details</h2>
                            <div className="grid gap-6 md:grid-cols-2">
                                <Card>
                                    <CardHeader>
                                        <h3 className="text-lg font-medium">Specifications</h3>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Material:</span>
                                            <span>100% Premium Cotton</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Weight:</span>
                                            <span>180 GSM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Fit:</span>
                                            <span>Regular Fit</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Origin:</span>
                                            <span>Made in USA</span>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <h3 className="text-lg font-medium">Features</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2 text-sm">
                                            <li>• Pre-shrunk fabric for lasting fit</li>
                                            <li>• Reinforced seams for durability</li>
                                            <li>• Tagless design for comfort</li>
                                            <li>• Eco-friendly printing process</li>
                                            <li>• Machine washable</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                )}

                {activeTab === "reviews" && (
                    <TabsContent value="reviews" className="mt-0">
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                <h2 className="text-xl font-semibold">
                                    All Reviews <span className="text-gray-500 font-normal">(40)</span>
                                </h2>
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" size="sm" className="hidden sm:flex">
                                        <Filter className="w-4 h-4 mr-2" />
                                        Filter
                                    </Button>
                                    <Select defaultValue="latest">
                                        <SelectTrigger className="w-[120px]">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="latest">Latest</SelectItem>
                                            <SelectItem value="oldest">Oldest</SelectItem>
                                            <SelectItem value="highest">Highest Rated</SelectItem>
                                            <SelectItem value="lowest">Lowest Rated</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button size="sm">Write a Review</Button>
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                {reviews.map((review) => (
                                    <Card key={review.id} className="relative">
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium">{review.name}</span>
                                                    {review.verified && <CheckCircle className="w-4 h-4 text-green-500" />}
                                                </div>
                                                <Button variant="ghost" size="sm" className="h-auto p-1">
                                                    <MoreHorizontal className="w-4 h-4" />
                                                </Button>
                                            </div>
                                            <div className="flex items-center gap-1 mb-3">{renderStars(review.rating)}</div>
                                            <p className="text-gray-700 text-sm mb-3 leading-relaxed">{review.text}</p>
                                            <p className="text-xs text-gray-500">Posted on {review.date}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <div className="text-center">
                                <Button variant="outline" className="w-full sm:w-auto">
                                    Load More Reviews
                                </Button>
                            </div>
                        </div>
                    </TabsContent>
                )}

                {activeTab === "faqs" && (
                    <TabsContent value="faqs" className="mt-0">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-6">
                                            <h3 className="font-medium mb-2">{faq.question}</h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="text-center">
                                <Button variant="outline">Contact Support</Button>
                            </div>
                        </div>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    )
}
