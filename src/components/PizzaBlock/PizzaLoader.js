import React from 'react'
import ContentLoader from 'react-content-loader'

const PizzaLoader = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="105"/>
            <rect x="0" y="253" rx="3" ry="3" width="280" height="24"/>
            <rect x="0" y="287" rx="3" ry="3" width="280" height="84"/>
            <rect x="0" y="389" rx="3" ry="3" width="85" height="44"/>
            <rect x="129" y="389" rx="30" ry="30" width="151" height="44"/>
        </ContentLoader>
    )
}

export default PizzaLoader