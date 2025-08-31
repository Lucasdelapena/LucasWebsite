import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-xl">
      <h1>
        <motion.p 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        >
          Contact
        </motion.p>
      </h1>
      <p className="text-gray-600">
        Best way: email me at <a className="underline" href="mailto:you@example.com">you@example.com</a>.
      </p>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="grid gap-3"
      >
        <label className="grid gap-1">
          <span className="text-sm">Your email</span>
          <input required name="email" type="email" className="border rounded-xl px-3 py-2" placeholder="you@domain.com" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Message</span>
          <textarea required name="message" rows="5" className="border rounded-xl px-3 py-2" placeholder="What’s up?"></textarea>
        </label>
        <button className="px-4 py-2 rounded-xl bg-black text-white w-fit">Send</button>
      </form>
    </section>
  )
}
