import SesorLayout from '../SesorLayout'
import HeroTopAbout from '../components/heroSection/AboutHero/HeroTopAbout'
import VisionHero from '../components/heroSection/AboutHero/VisionHero'
import MissionHero from '../components/heroSection/AboutHero/MissionHero'
import CoreValue from '../components/Card/CoreValue'
import DriverSection from '../components/heroSection/AboutHero/DriverSection'
import CustomService from '../components/heroSection/AboutHero/CustomService'
import DeliverSection from '../components/heroSection/AboutHero/DeliverSection'
import CareerPost from '../components/Card/CareerPost'

const Index = () => {
  return (
    <SesorLayout>
        <HeroTopAbout/>
        <VisionHero/>
        <MissionHero/>
        <CoreValue/>
        <DriverSection/>
        <CustomService/>
        <DeliverSection/>
        <CareerPost/>
    </SesorLayout>
  )
}

export default Index
