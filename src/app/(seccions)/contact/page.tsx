'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setError(false)
    setSuccess(false)

    const templateParams = {
      name,
      email,
      message,
    }

    try {
      await emailjs.send(
        'service_6ducez8', 
        'template_rnxj60m', 
        templateParams,
        'CZhDtodWEdXPFWQca' 
      )
      setSuccess(true)
    } catch (error) {
      console.error('Error enviando el mensaje: ', error)
      setError(true)
    } finally {
      setLoading(false)
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div className="mt-10 min-h-screen bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:text-left text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Contact me
            </h1>
            <p className="mt-4 text-lg text-gray-300">
            Hello! I'm here for you. If you'd like to reach out, feel free to send me an email, and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="w-full bg-gray-900 shadow-lg rounded-lg overflow-hidden p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send me a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 w-full border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 w-full border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-4">Failed to send message. Please try again later.</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
