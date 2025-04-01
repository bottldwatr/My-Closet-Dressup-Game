'use client';

import { useState, useEffect } from "react"

export default function ClothingCategoriesNavbar() {
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

    const [currCategory, setCurrCategory] = useState<string>(categories[0]);

    const arrowStyling = `
        p-3 
        size-5 
        bg-red-500
        hover:bg-red-600 
        active:scale-x-95
        active:scale-y-95
    `

    const currentCategoryStyling:string = `
        min-w-18
        bg-red-500 
        flex 
        items-center 
        justify-center 
        hover:bg-red-600 
        outline-2
        outline-offset-2
        outline-red-500
        active:scale-x-95
        active:scale-y-95
        snap-center
    `

    const categoryStyling:string = `
        min-h-10
        min-w-18
        bg-red-500 
        flex 
        items-center 
        justify-center 
        hover:bg-red-600 
        active:scale-x-95
        active:scale-y-95
        snap-center
    `
    
    const currIndex:number = categories.indexOf(currCategory);

    function radioCheck(category:string) {
        return category == currCategory ? true : false
    }

    function categoryStylingCheck(category:string) {
        return category == currCategory ? currentCategoryStyling : categoryStyling
    }

    function rightButtonClickCategories() {
        if (currIndex != categories.length - 1) {
            setCurrCategory(categories[currIndex + 1])
        }
        else {
            setCurrCategory(categories[0])
        }
    }

    function leftButtonClickCategories() {
        if (currIndex != 0) {
            setCurrCategory(categories[currIndex - 1])
        }
        else {
            setCurrCategory(categories[categories.length - 1])
        }
    }

    useEffect(() => {
        document.getElementById("categorySection")!.scrollLeft = (currIndex - 3) * 80
    }, [currCategory, currIndex])

    return (
        <div>
            <div className="min-w-max flex items-center">
                <button onClick={() => {leftButtonClickCategories()}} className={arrowStyling}></button>
                <div id="categorySection" className="p-2 box-border max-w-148 flex flex-row gap-3 overflow-y-scroll smooth-scroll no-scrollbar snap-x">
                    {
                        categories.map((category, i) => (
                            <button 
                                onClick={() => setCurrCategory(category)} 
                                type="button" 
                                key={i} 
                                className={categoryStylingCheck(category)}
                            >
                                <p>{category}</p>
                            </button>
                        ))
                    }
                </div>
                <button onClick={() => rightButtonClickCategories()} className={arrowStyling}></button>
            </div>
            <div className="flex justify-center">
                {
                    categories.map((category, i) => (
                        <input 
                            onChange={() => setCurrCategory(category)}
                            key={categories.length + i} 
                            checked={radioCheck(category)}
                            name="categories" 
                            type="radio"
                        />
                    ))
                }
            </div>
        </div>
    )
}