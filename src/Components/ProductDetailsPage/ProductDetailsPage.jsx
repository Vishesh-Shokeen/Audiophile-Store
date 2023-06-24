import React, { useEffect, useState } from 'react'
import styles from './ProductDetailsPage.module.css'
import Categories from '../Categories/Categories'
import BestAudioGear from '../BestAudioGear/BestAudioGear'
import { useParams } from 'react-router-dom'
import Suggestions from '../Suggestions/Suggestions'
import PurchaseWindow from '../PurchaseWindow/PurchaseWindow'
import Features from '../Features/Features'


export default function ProductDetailsPage() {
  const { ProductDetailsPage } = styles
  const [state, setState] = useState([])

  const { price, desc, id, name, features, desktop_product_image, tablet_product_image, mobile_product_image } = state



  const params = useParams()
  const pID = params.id

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setState(data.products.filter(x => x.id == pID)[0]))
  }, [pID])


  return (

    <div className={`${ProductDetailsPage} wrapper`}>

      <PurchaseWindow
        productName={name}
        productDesc={desc}
        price={price}

        productImg={desktop_product_image}
        productMobile={tablet_product_image}
        productTablet={mobile_product_image}
        productID={id}

      />

      {features ? <Features desc={features.desc} inbox={features.inbox} /> : null}

      <Suggestions
        productID={id}
      />

      <Categories />
      <BestAudioGear />

    </div>

  )
}
