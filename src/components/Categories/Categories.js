import React, { memo } from 'react'

const Categories = memo(({ activeCategory, categories, onSelectCategory }) => {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? "active" : ""} onClick={() => onSelectCategory(null)}>Все</li>
                {
                    categories && categories.map((item, index) => (
                        <li key={`${item}_${index}`} onClick={() => onSelectCategory(index)}
                            className={activeCategory === index ? "active" : ""}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
})

export default Categories