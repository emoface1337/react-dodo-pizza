import React, { useState } from 'react'

const Categories = ({ categories }) => {

    const [activeCategory, setActiveCategory] = useState(null)

    const onSelectItem = (index) => {
        setActiveCategory(index)
    }

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