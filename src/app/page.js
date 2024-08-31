

import Banner from '@/components/Banner_part/Banner'
import ContactForm from '@/components/ContactFrom/ContactForm'
import Hero from '@/components/Hero_Part/Hero'
import Projects from '@/components/Project_Part/Projects'
import Service from '@/components/Service_part/Service'


const page = () => {
  return (
    <main>           
      <Hero/>
      <Banner/>
      <Service/>
      <Projects/>
      <ContactForm/>  
    </main>
  )
}

export default page
