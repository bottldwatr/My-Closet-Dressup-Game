'use client';

import { useState } from "react"

export default function ClothingCategories() {
    const [currCategory, setCurrCategory] = useState<string>("Shirt");

    const categories: string[] = [
        "Shirt",
        "Overshirt",
        "Outerwear",
        "Pants",
        "Belt",
        "Skirt",
        "Shoes",
        "Socks",
        "Accessory 1",
        "Accessory 2",
        "Accessory 3",
        "Accessory 4",
        "Accessory 5",
    ]

    const styling:string = `
        min-h-10
        min-w-18
        bg-red-500 
        flex 
        items-center 
        justify-center 
        hover:bg-red-600 
        focus:outline-2
        focus:outline-offset-2
        focus:outline-red-500
        active:scale-x-95
        active:scale-y-95
        `
    
    return (
        <div>
            <div className="min-w-max flex items-center">
                <div className="p-3 size-5 bg-black"></div>
                <div className="p-3 box-border max-w-108 flex flex-row gap-3 bg-green-100 overflow-hidden">
                    {
                        categories.map((category, i) => (
                            <button onClick={() => setCurrCategory(category)} type="button" key={i} className={styling}>
                                <p>{category}</p>
                            </button>
                        ))
                    }
                </div>
                <div className="size-5 bg-black"></div>
            </div>
            <div className="flex justify-center">
                {
                    categories.map((i) => (
                        <input key={categories.length + i} name="categories" type="radio"/>
                    ))
                }
            </div>
        </div>
    )
}