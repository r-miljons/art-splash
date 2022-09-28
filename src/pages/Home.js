import React from 'react'
import About from '../components/About'
import CategorySelection from '../components/CategorySelection'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
      <About />
      <Newsletter />
    </>
  )
}
