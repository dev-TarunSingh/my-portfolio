import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-4xl font-bold mb-10">Contact Me</h2>
      <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            id="name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your Message"
            rows="5"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-700 transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
