import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedProducts } from './components/FeatureProducts'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { UseTitle } from '../../hooks/UseTitle'

export const HomePage = () => {
  UseTitle("Home")
  return (
    <main>
        <div>
           <Hero/> 
           <FeaturedProducts/>
           <Testimonials/>
           <Faq/>
        </div>
    </main>
  )
}


 