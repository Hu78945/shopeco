"use client"
import { AlignJustify, ChevronDown, Search, SearchIcon, ShoppingCart, User } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import Link from 'next/link'

const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className="p-4 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-7">
                    {/* Main Row Container */}
                    <div className="flex items-center justify-between space-x-6">

                        {/* Left: Logo + Mobile Menu */}
                        <div className="flex items-center space-x-3">
                            <AlignJustify className="w-6 h-6 cursor-pointer sm:hidden" onClick={() => setOpen(true)} />
                            <Link href='/'>
                                <h1 className="text-xl sm:text-2xl font-extrabold">SHOP.CO</h1>
                            </Link>
                        </div>

                        {/* Center: Menu Links */}
                        <ul className="hidden sm:flex items-center space-x-6 list-none">
                            <li className="flex items-center space-x-1 cursor-pointer">
                                <span>Shop</span>
                                <ChevronDown className="w-4 h-4 mt-0.5" />
                            </li>
                            <li className="cursor-pointer">On Sale</li>
                            <li className="cursor-pointer">New Arrivals</li>
                            <li className="cursor-pointer">Brands</li>
                        </ul>

                        {/* Center: Search Bar */}
                        <div className="flex-1 max-w-lg hidden sm:block">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Search for products..."
                                    className="pl-10 bg-gray-100 border-0 rounded-full w-full"
                                />
                            </div>
                        </div>

                        {/* Right: Icons */}
                        <div className="flex items-center space-x-4">
                            <SearchIcon className='w-6 h-6 sm:hidden' onClick={() => setOpen(true)} />
                            <Link href="/cart">
                                <ShoppingCart className="w-6 h-6 cursor-pointer" />
                            </Link>
                            <User className="w-6 h-6 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </nav>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side='left' className="w-full h-full p-6 sm:max-w-full">
                    <SheetHeader>
                        <SheetTitle>Search Or Go Through Quick Links</SheetTitle>

                    </SheetHeader>
                    {/* Mobile Search Bar */}
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search for products..."
                                className="pl-10 bg-gray-100 border border-gray-200 rounded-full w-full"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Links */}
                    <ul className="space-y-4 list-none">
                        <li className="flex items-center space-x-2 cursor-pointer">
                            <span>Shop</span>
                            <ChevronDown className="w-4 h-4" />
                        </li>
                        <li className="cursor-pointer">On Sale</li>
                        <li className="cursor-pointer">New Arrivals</li>
                        <li className="cursor-pointer">Brands</li>
                    </ul>
                </SheetContent>
            </Sheet>
        </>


    )
}

export default NavBar