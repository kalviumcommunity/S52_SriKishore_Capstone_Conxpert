import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md lg:-mt-[60px]'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>Encountering a technical hiccup? Excited to share feedback on our beta features? Reach out and let us know!</p>

        <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form_label'>
              Your Email
            </label>
            <input type="email" id="email" placeholder='example@gmail.com' className='form_input mt-1' />
          </div>

          <div>
            <label htmlFor="subject" className='form_label'>
              Subject
            </label>
            <input type="text" id="subject" placeholder='Let us know how can help you' className='form_input mt-1' />
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form_label'>
              Your Message
            </label>
            <textarea type="text" id="message" placeholder='Leave a comment.....' className='form_input mt-1' />
          </div>

          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>

        </form>

      </div>
    </section>
  )
}

export default Contact
