import React, { useState } from 'react'

const Categories = ({ categories, onSelectCategory }) => {

    const [activeCategory, setActiveCategory] = useState(null)

    const onSelectItem = (index) => {
        setActiveCategory(index)
        onSelectCategory(index)
    }

    console.log('categories re-render')

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""} onClick={() => onSelectItem(null)}>Все</li>
                {
                    categories && categories.map((item, index) => (
                        <li key={`${item}_${index}`} onClick={() => onSelectItem(index)}
                            className={activeCategory === index ? "active" : ""}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories