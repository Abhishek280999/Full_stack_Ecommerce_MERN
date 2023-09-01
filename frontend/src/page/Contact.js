import React from 'react'
import Socials from '../compouent/Socials'

const Contact = () => {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              id="address"
              name="address"
              placeholder="Your Address"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mt-2">
            <h2 className="text-xl text-center font-semibold mb-2">Connect with us:</h2>
            <div className="flex justify-center">
              <Socials />
            </div>
          </div>
          <button
            className="bg-blue-500 mt-2 text-white p-2 rounded-md hover:bg-blue-600  focus:outline-none focus:ring"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}

export default Contact