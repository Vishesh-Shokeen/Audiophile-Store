import React, { useEffect, useState } from 'react'
import styles from './PhotoGallery.module.css'
export default function PhotoGallery() {
    const {photoGrid , img1 , img2 , img3 } = styles
    const [photoGallery, setPhotoGallery] = useState([])

    useEffect(() => {
        fetch('api/products')
            .then(res => res.json())
            .then(data => setPhotoGallery(data.products[1]))
    }, [])

    return (
        <div className="wrapper">
            
        <div className={photoGrid}>
             <picture className={img1}>
                <source media="(max-width: 400px)" srcSet={photoGallery.mobile_image_gallery[0]} />
                <source media="(max-width: 800px)" srcSet={photoGallery.tablet_image_gallery[0]} />
                <img src={photoGallery.desktop_image_gallery[0]} alt="photo" />
            </picture>

            <picture className={img2}>
                <source media="(max-width: 400px)" srcSet={photoGallery.mobile_image_gallery[1]} />
                <source media="(max-width: 800px)" srcSet={photoGallery.tablet_image_gallery[1]} />
                <img src={photoGallery.desktop_image_gallery[1]} alt="photo" />
            </picture>

            <picture className={img3}>
                <source media="(max-width: 400px)" srcSet={photoGallery.mobile_image_gallery[2]} />
                <source media="(max-width: 800px)" srcSet={photoGallery.tablet_image_gallery[2]} />
                <img src={photoGallery.desktop_image_gallery[2]} alt="photo" />
            </picture> 
        </div>
        </div>
    )
}
