import ComeAndVisit from '@/components/come-and-visit'
import MainSection from '@/components/main-section'
import Questions from '@/components/questions/questions'
import Services from '@/components/services-section/services'
// import WhyChooseUs from '@/components/why-choose-us'
import ContactUsSection from '@/components/contact-us/contact-us-section'

export default function Home() {
  return (
    <div className=''>
      <MainSection />
      {/* <WhyChooseUs /> */}
      <Services />
      <Questions />
      <ComeAndVisit />
      <ContactUsSection />
    </div>
  )
}
