'use client'  // This is a client component Solve Hydration Error

import React from 'react'
import { Footer, Header } from '../components/common'
import { CallToAction, Hero, LogoTicker,Testimonials ,GridCard, MainPage} from '../components/landing-page'

const Home =() => {

  return (
    <main id='home'>
      <Header />
      <MainPage/>
      <LogoTicker />
      <Hero />
      {/* <ProductShowCase /> */}
      {/* <Pricing /> */}
      <GridCard/>
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default Home