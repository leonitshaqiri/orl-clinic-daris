'use client'

import { useState, useEffect } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  return (
    <div className='w-full md:w-11/12 mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10 relative'>
      <div className='mx-4 md:mx-0'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Na Kontaktoni</h2>

        <form
          onSubmit={handleSubmit}
          className='bg-white shadow-lg rounded-2xl p-8 space-y-3'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label
                htmlFor='firstName'
                className='block text-sm font-medium text-gray-600'
              >
                Emri
              </label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={form.firstName}
                onChange={handleChange}
                required
                className='mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none'
              />
            </div>

            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium text-gray-600'
              >
                Mbiemri
              </label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={form.lastName}
                onChange={handleChange}
                required
                className='mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-600'
            >
              Email Adresa
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              className='mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none'
            />
          </div>

          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-600'
            >
              Numri i Telefonit
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              required
              className='mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none'
            />
          </div>

          <div>
            <label
              htmlFor='subject'
              className='block text-sm font-medium text-gray-600'
            >
              Subjekti
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={form.subject}
              onChange={handleChange}
              required
              className='mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none'
            />
          </div>

          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-600'
            >
              Mesazhi Juaj
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className='mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none resize-none'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-primaryGreen text-white py-3 rounded-xl font-semibold hover:bg-secondaryGreen transition-all'
          >
            Dergo Mesazhin
          </button>
        </form>
        {submitted && (
          <div className='bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center absolute top-2 right-2'>
            ✅ Faleminderit! Mesazhi juaj u dërgua me sukses.
          </div>
        )}
      </div>

      <div
        className='rounded-2xl overflow-hidden shadow-lg mx-4 md:mx-0 md:h-1/2 min-h-[250px] md:min-h-[400px]'
        // style={{ minHeight: '400px' }}
      >
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d792.0304246083138!2d21.47149286069747!3d42.4589537198808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d42.4589619!2d21.4719062!5e1!3m2!1sen!2s!4v1757516683589!5m2!1sen!2s'
          width='100%'
          height='100%'
          style={{ border: 0, minHeight: '250px' }}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  )
}
