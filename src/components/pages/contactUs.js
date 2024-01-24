import React from 'react';
import Header from './header';

const ContactUsPage = () => {
  return (
    <div className="">
      <div className=' fixed top-0 w-full'>

      <Header/>
      </div>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-14">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14  bg-emerald-600 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C6.475 2 2 6.475 2 12c0 5.525 4.475 10 10 10s10-4.475 10-10c0-5.525-4.475-10-10-10zm0 18v-2m0-4h.01M12 6a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-emerald-600">Contact Us</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Fill out the form below to get in touch with us.</p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="py-2 px-4 block w-full shadow-sm focus:ring-emerald-600 focus:border-emerald-600 border-gray-300 rounded-md"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-2 px-4 block w-full shadow-sm focus:ring-emerald-600 focus:border-emerald-600 border-gray-300 rounded-md"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="py-2 px-4 block w-full shadow-sm focus:ring-emerald-600 focus:border-emerald-600 border border-gray-300 rounded-md"
                        placeholder="Your Message"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-emerald-600 hover:bg-emerald-800 focus:ring-emerald-600 focus:border-emerald-600 w-full text-white rounded-md font-medium"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;