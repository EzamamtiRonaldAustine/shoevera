import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import ProductShowcase from './components/ProductShowcase'
import ShoeRevealSection from './components/ShoeRevealSection'
import VideoDemo from './components/VideoDemo'
import SocialProof from './components/SocialProof'
import HowToBuy from './components/HowToBuy'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import { DEMO_VIDEO_URL } from './config'

// Images in public/: hero.png, product.png, how-to-use.png, shoe.png (optional - for hover reveal default state)
const heroImage = '/hero.png'
const productImage = '/product.png'
const howToUseImage = '/how-to-use.png'
const shoeImage = '/shoe.png' // Add a shoe-only photo for hover reveal; fallback shows placeholder

export default function App() {
  return (
    <>
      <Navbar />
      <Hero heroImage={heroImage} />
      <Problem />
      <Solution howToUseImage={howToUseImage} />
      <Benefits />
      <ProductShowcase productImage={productImage} />
      <ShoeRevealSection
        shoeImage={shoeImage}
        shoeWithShoeveraImage={heroImage}
      />
      <VideoDemo videoSrc={DEMO_VIDEO_URL} />
      <SocialProof />
      <HowToBuy />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}
