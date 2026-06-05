import AdaptedIndustries from '@/components/landing/AdaptedIndustries'
import CompareRates from '@/components/landing/CompareRates'
import EarlyAccess from '@/components/landing/EarlyAccess'
import Footer from '@/components/landing/Footer'
import Hero from '@/components/landing/Hero'
import Nav from '@/components/landing/Nav'
import Opportunities from '@/components/landing/Opportunities'
import Pricing from '@/components/landing/Pricing'
import Process from '@/components/landing/Process'

const page = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <EarlyAccess />
      <Process />
      <Opportunities />
      <AdaptedIndustries/>
      <CompareRates/>
      <Pricing/>
      <Footer/>
    </main>
  )
}

export default page