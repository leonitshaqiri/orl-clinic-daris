import Image from 'next/image'

export default function WhyChooseUs() {
  return (
    <div className='w-11/12 mx-auto py-28'>
      <h2 className='text-center'>Pse duhet te na zgjedhni ne?</h2>
      <div className='flex justify-between pt-20'>
        <div className='flex flex-col justify-between'>
          <h4>Doktoresha ma e mira</h4>
          <h4>Doktoresha ma e bukura</h4>
        </div>
        <div>
          <Image
            src='/assets/logo-1.svg'
            alt='Doktoresha ma e bukura'
            width={500}
            height={500}
          />
        </div>
        <div className='flex flex-col justify-between'>
          <h4>Doktoresha ma e mencur</h4>
          <h4>Doktoresha ma e dashur</h4>
        </div>
      </div>
    </div>
  )
}
