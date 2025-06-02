import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Facebook, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white w-full">
            {/* Newsletter Section */}
            <div className="bg-black py-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase max-w-xs">
                            Stay upto date about our latest offers
                        </h2>
                        <div className="flex flex-col gap-2 w-full md:w-auto md:min-w-[350px]">
                            <div className="relative w-full mx-auto">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="bg-white text-black rounded-full pl-12 pr-4 h-12 w-full text-center border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <Mail size={20} className="text-gray-500" />
                                </div>
                            </div>
                            <Button className="bg-white text-black hover:bg-gray-200 rounded-full h-12">
                                Subscribe to Newsletter
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-gray-100 text-black py-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Logo and Description */}
                        <div className="md:col-span-3">
                            <h2 className="text-2xl font-bold uppercase mb-3">SHOP.CO</h2>
                            <p className="text-sm text-gray-600 mb-4">
                                We have clothes that suits your style and which youre proud to wear. From women to men.
                            </p>
                            <div className="flex space-x-4 mb-6">
                                <Link href="#" className="bg-black rounded-full p-2">
                                    <Twitter className="h-4 w-4 text-white" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link href="#" className="bg-black rounded-full p-2">
                                    <Facebook className="h-4 w-4 text-white" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link href="#" className="bg-black rounded-full p-2">
                                    <Instagram className="h-4 w-4 text-white" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link href="#" className="bg-black rounded-full p-2">
                                    <Youtube className="h-4 w-4 text-white" />
                                    <span className="sr-only">YouTube</span>
                                </Link>
                            </div>
                        </div>

                        {/* Footer Links - Responsive Layout */}
                        <div className="md:col-span-9">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                {/* COMPANY */}
                                <div>
                                    <h3 className="font-semibold uppercase mb-4 md:mb-6">Company</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Features
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Works
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Career
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* HELP */}
                                <div>
                                    <h3 className="font-semibold uppercase mb-4 md:mb-6">Help</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Customer Support
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Delivery Details
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Terms & Conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* FAQ */}
                                <div>
                                    <h3 className="font-semibold uppercase mb-4 md:mb-6">FAQ</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Manage Deliveries
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Orders
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Payments
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* RESOURCES */}
                                <div>
                                    <h3 className="font-semibold uppercase mb-4 md:mb-6">Resources</h3>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Free eBooks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Development Tutorial
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                How to - Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="text-gray-600 hover:text-black">
                                                Youtube Playlist
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright and Payment Methods */}
                    <div className="mt-12">
                        <Separator className="mb-6" />
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-sm text-gray-600 mb-4 md:mb-0">Shopco © 2000-2023. All Rights Reserved</p>
                            <div className="flex space-x-3">
                                <Image
                                    src="/images/Visa.png"
                                    alt="Visa"
                                    width={46}
                                    height={30}
                                    className=""
                                />
                                <Image
                                    src="/images/Master.png"
                                    alt="Mastercard"
                                    width={46}
                                    height={30}
                                    className=""
                                />
                                <Image
                                    src="/images/PayPal.png"
                                    alt="PayPal"
                                    width={46}
                                    height={30}
                                    className=""
                                />
                                <Image
                                    src="/images/ApplePay.png"
                                    alt="Apple Pay"
                                    width={46}
                                    height={30}
                                    className=""
                                />
                                <Image
                                    src="/images/GooglePay.png"
                                    alt="Google Pay"
                                    width={46}
                                    height={30}
                                    className=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
