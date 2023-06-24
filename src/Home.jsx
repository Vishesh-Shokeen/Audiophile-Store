import { React, useEffect } from 'react'
import Hero from './Components/Hero/Hero'
import Categories from './Components/Categories/Categories'
import ProductIntroSection from './Components/Product-Intro-Section/Product-Intro-Section'
import BestAudioGear from './Components/BestAudioGear/BestAudioGear'
import styles from './Home.module.css'


export default function Home() {
    const { component, heroComponent, show } = styles

    


    useEffect(()=> {
        const elems = document.querySelectorAll(`.${component}`)

        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting && !entry.target.classList.contains(`${show}`)){
                    entry.target.classList.add(`${show}`)
                }
            })
        })



        elems.forEach(x =>io.observe(x))
    },[])

    return (
        <>
            <div className={heroComponent}>
                <Hero />
            </div>
            <div className="wrapper">

                <div className={component}>
                    <Categories />
                </div>

                <div className={component}>
                    <ProductIntroSection />
                </div>

                <div className={component}>
                    <BestAudioGear />
                </div>

            </div>

        </>
    )
}
