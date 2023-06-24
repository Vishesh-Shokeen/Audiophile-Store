import { useEffect, useState , React} from 'react'
import styles from './SpeakerPage.module.css'
import ProductDisplay from '../ProductDisplay_Wrap/ProductDisplay'
import Categories from '../Categories/Categories'
import BestAudioGear from '../BestAudioGear/BestAudioGear'

export default function SpeakerPage() {

    const { SpeakerPage } = styles

    const [productData, setProductData] = useState([])

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProductData(data.products.filter(x => x.type === 'speakers')))
    }, [])


    const speakers = productData.map((product, id) => 
    <ProductDisplay
        key={id}
        productName={product.name}
        desc={product.desc}
        image={product.desktop_preview_image}
        tabletImg={product.mobile_preview_image}
        mobileImg={product.tablet_preview_image}
        textOrder={id % 2 !== 0 ? '-1' : null}
        serverID = {product.id}
    />)


    return (
        <div className={`${SpeakerPage} wrapper`}>
            {speakers}
            <Categories />
            <BestAudioGear />
        </div>
    )
}
