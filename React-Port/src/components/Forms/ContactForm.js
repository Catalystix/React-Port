import React, { useState, useEffect } from "react";

import { validateEmail } from '../../utils/helpers';
import { useForm } from '@formspree/react';

// const FORM_ENDPOINT = ""; // - fill on the later step

// const ContactForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const handleSubmit = () => {
//     setTimeout(() => {
//       setSubmitted(true);
//     }, 100);
//   };

//   if (submitted) {
//     return (
//       <>
//         <div className="text-2xl">Thank you!</div>
//         <div className="text-md">We'll be in touch soon.</div>
//       </>
//     );
//   }

//   return (
//     <div class="py-8 px-4 mx-auto max-w-screen-xl grid place-content-center lg:py-16">
//     <form style={{

//     }}
//       action={FORM_ENDPOINT}
//       onSubmit={handleSubmit}
//       method="POST"
//       target="_blank"
//     >
//       <div className="mb-4 pt-0">Contact Me
//         <input
//           type="text"
//           placeholder="Your name"
//           name="name"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-4 pt-0">
//         <input
//           type="email"
//           placeholder="Email"
//           name="email"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-4 pt-0">
//         <textarea
//           placeholder="Your message"
//           name="message"
//           className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
//           required
//         />
//       </div>
//       <div className="mb-4 pt-0">
//         <button
//           className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//           type="submit"
//         >
//           Send a message
//         </button>
//       </div>
//     </form>
//     </div>
//   );
// };

function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORM_ID);


  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;




  if (state.succeeded) {
    return (
      <div>
        <p>Thanks for reaching out!</p>
        <button className="button is-medium is-primary is-half m-6" onClick={() => window.open("/#contact")}>Back to About</button>
      </div>
    );
  }


  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl grid place-content-center lg:py-16">
      <p className="content is-medium">Contact Me</p>
      <hr />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="mb-4 pt-0">
          <label className="label" htmlFor="name">Name</label>
          <input className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="mb-4 pt-0">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="mb-4 pt-0">
          <label className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" htmlFor="message">Message</label>
          <textarea className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="is-danger">{errorMessage}</p>
          </div>
        )}
        <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );
}



export default ContactForm;