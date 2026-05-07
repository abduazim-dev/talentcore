import EarlyAccess from '@/components/landing/EarlyAccess'
import Hero from '@/components/landing/Hero'
import Nav from '@/components/landing/Nav'
import Process from '@/components/landing/Process'

const page = () => {
  return (
    <main>
      <Nav />
      <Hero/>
      <EarlyAccess/>
      <Process/>
    </main>
  )
}

export default page