import CardService from './components/Card/CardService'
import Contact from './components/contactSesor/Contact'
import FAQS from './components/heroSection/FAQSection/FAQS'
import FAQSDetail from './components/heroSection/FAQSection/FAQSDetail'
import Hero from './components/heroSection/MainPageHero/Hero'
import Hero02 from './components/heroSection/MainPageHero/Hero2'
import Hero03 from './components/heroSection/MainPageHero/Hero3'
import Hero04 from './components/heroSection/MainPageHero/Hero4'
import { SlideWithAlertDialog } from './components/SlideShow/Slide'
import SesorLayout from './SesorLayout'


const Index = () => {
  return (
    <SesorLayout>
      <SlideWithAlertDialog/>
      <Hero/>
      <Hero02/>
      <Hero03/>
      <CardService/>
      <Hero04/>
      <Contact/>
      <FAQS/>
    </SesorLayout>
  )
}

export default Index
