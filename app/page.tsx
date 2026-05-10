import EarlyAccess from '@/components/landing/EarlyAccess'
import Hero from '@/components/landing/Hero'
import Nav from '@/components/landing/Nav'
import Opportunities from '@/components/landing/Opportunities'
import Process from '@/components/landing/Process'

const page = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <EarlyAccess />
      <Process />
      <Opportunities />
    </main>
  )
}

export default page