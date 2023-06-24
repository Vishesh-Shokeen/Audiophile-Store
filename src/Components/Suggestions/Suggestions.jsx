import React, { useEffect, useState } from 'react'
import styles from './Suggestions.module.css'
import { Link } from 'react-router-dom'


export default function Suggestions(props) {
    const { Suggestions, Suggestions_Box } = styles
    const [suggestions, setSuggestions] = useState([])
    const pID = props.productID

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setSuggestions(data.products))
    }, [])


    const productSuggestions = suggestions.filter(x => x.id !== pID).slice(0, 3).map((x, id) =>
        <div className={Suggestions_Box}
            key={id}
        >
            <picture>
                <source media="(max-width: 800px)" srcSet={x.tablet_preview_image} />
                <img src={x.desktop_preview_image} alt="productImg" />
            </picture>

            <h2>{x.name}</h2>

            <Link to={`/products/${x.id}`} >
            <button className="btn-1">SEE PRODUCT</button>
            </Link>

        </div>)


    return (
        <div className={Suggestions}>
            {productSuggestions}
        </div>
    )
}
