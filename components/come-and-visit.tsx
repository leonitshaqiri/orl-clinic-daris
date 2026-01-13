import Image from 'next/image'

export default function ComeAndVisit() {
  return (
    <div className='w-11/12 mx-auto my-20'>
      <h2 className='text-center pb-10'>Ejani na vizitoni</h2>
      <div className='relative w-full h-[700px] rounded-4xl rounded-bl-none overflow-hidden'>
        <Image
          src='/assets/01-orl.png'
          alt='Come and Visit'
          fill
          className='object-cover'
          objectPosition='top'
        />
        <div className='absolute bottom-0 left-0 bg-primaryGreen bg-opacity-50 p-10 rounded-tr-4xl text-white'>
          <div className='flex gap-x-10'>
            <div className='flex items-center gap-x-1'>
              <Image
                src='/assets/location.png'
                alt='Clinic Location'
                width={20}
                height={20}
              />
              <p>Rruga Mulla Idrizi, Kompleksi banesor ‘’Fitorja’’</p>
            </div>
            <div className='flex items-center gap-x-1'>
              <Image
                src='/assets/phone.png'
                alt='Clinic Phone'
                width={20}
                height={20}
              />
              <p>+383 44 471 055</p>
            </div>
          </div>
          <div className='flex items-center gap-x-1 pt-14'>
            <Image
              src='/assets/mail.png'
              alt='Clinic Email'
              width={20}
              height={20}
            />
            <p>orlclinicdaris@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
