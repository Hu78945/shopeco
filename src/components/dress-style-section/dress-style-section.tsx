import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function DressStyleSection() {
    const router = useRouter();
    return (
        <section className="w-full py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="bg-gray-100 rounded-3xl p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-black tracking-tight">
                        BROWSE BY DRESS STYLE
                    </h2>

                    <div className="grid grid-cols-1 gap-3 max-w-4xl mx-auto md:grid-cols-5 md:grid-rows-6 md:h-[400px] lg:h-[450px]">
                        {/* Casual - Top Left */}
                        <Card
                            className="h-32 md:h-auto md:col-span-2 md:row-span-3 relative overflow-hidden border-0 hover:shadow-md transition-shadow duration-300 cursor-pointer group bg-white"
                            style={{
                                backgroundImage: "url('/images/image 13.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'white'
                            }}
                            onClick={() => router.push("/category")}
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-2 left-2 z-10">
                                <h3 className="text-sm md:text-lg font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                                    Casual
                                </h3>
                            </div>
                        </Card>

                        {/* Formal - Top Right (Larger) */}
                        <Card
                            className="h-32 md:h-auto md:col-start-3 md:col-span-3 md:row-span-3 relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group bg-white"
                            style={{
                                backgroundImage: "url('/images/image 13.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'white'
                            }}
                            onClick={() => router.push("/category")}

                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-2 left-2 z-10">
                                <h3 className="text-sm md:text-lg font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                                    Formal
                                </h3>
                            </div>
                        </Card>

                        {/* Party - Bottom Left (Larger) */}
                        <Card
                            className="h-32 md:h-auto md:col-span-3 md:row-start-4 md:row-span-3 relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group bg-white"
                            style={{
                                backgroundImage: "url('/images/image 13.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'white'
                            }}
                            onClick={() => router.push("/category")}

                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-2 left-2 z-10">
                                <h3 className="text-sm md:text-lg font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                                    Party
                                </h3>
                            </div>
                        </Card>

                        {/* Gym - Bottom Right */}
                        <Card
                            className="h-32 md:h-auto md:col-start-4 md:col-span-2 md:row-start-4 md:row-span-3 relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer group bg-white"
                            style={{
                                backgroundImage: "url('/images/image 13.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'white'
                            }}
                            onClick={() => router.push("/category")}

                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                            <div className="absolute top-2 left-2 z-10">
                                <h3 className="text-sm md:text-lg font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
                                    Gym
                                </h3>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}