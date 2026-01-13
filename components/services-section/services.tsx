import ServicesCart from './services-cart'
import { servicesContent } from '../../data/services'
import Button from '../button/button'
export default function Services() {
  return (
    <div className='py-14 bg-[#F8F8F8] mt-16'>
      <div className='w-11/12 mx-auto'>
        <h2 className='text-center'>Shërbimet</h2>
        <div className='grid md:grid-cols-3 gap-10 pt-10 md:pt-20'>
          {servicesContent.slice(0, 3).map((item) => (
            <ServicesCart key={item.id} data={item} hasImage />
          ))}
        </div>
        <div className='flex w-full justify-center pt-10 md:pt-20'>
          <Button
            variant='primary'
            title='Shiko te gjitha shërbimet'
            url='/sherbimet'
          />
        </div>
      </div>
    </div>
  )
}
