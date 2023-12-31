import React, { useEffect, useState } from 'react'
import ProductDisplay from '../ProductDisplay_Wrap/ProductDisplay'



export default function HeadPhonesPage() {

  const [productData, setProductData] = useState([])


  useEffect(() => {

    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProductData(data.products.filter(x => x.type === 'headphones')))

  }, [])


  const headphones = productData.map((product, id) =>

    <ProductDisplay
      key={id}
      productName={product.name}
      desc={product.desc}
      image={product.desktop_preview_image}
      tabletImg={product.tablet_preview_image}
      mobileImg={product.mobile_preview_image}
      textOrder={id % 2 !== 0 ? '-1' : null}
      serverID={product.id}
    />
  )

  return (

    <div className='wrapper'>
      {headphones}
    </div>

  )
}
