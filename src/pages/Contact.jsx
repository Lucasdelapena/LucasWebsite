import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="grid gap-6 max-w-xxl">
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
      <motion.p 
      className="text-gray-600 text-lg"
      initial={{ opacity: 0, }}
      animate={{ opacity: 1,}}
      transition={{ duration: 0.7, delay: 0.5 }}
      >
        Need to get in touch? Feel free to drop me a message using the form below. I look forward to connecting with you!
      </motion.p>
      <motion.form
        action="https://formspree.io/f/xqadlpzj"
        method="POST"
        className="grid gap-3"
        initial={{ opacity: 0, y : 60 }}
        animate={{ opacity: 1, y : 0 }}
        transition={{ duration: 0.7}}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex-1 grid gap-1">
            <span className="text-sm">Your Name</span>
            <input required name="fullname" type="fullname" className="border rounded-xl px-3 py-2" placeholder="Enter your full name" />
          </label>
          <label className="flex-1 grid gap-1">
            <span className="text-sm">Your email</span>
            <input required name="email" type="email" className="border rounded-xl px-3 py-2" placeholder="Email" />
          </label>
        </div>
        <label className="grid gap-1">
          <span className="text-sm">Subject</span>
          <input required name="subject" type="subject" className="border rounded-xl px-3 py-2" placeholder="What would you like to talk about?" />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Message</span>
          <textarea required name="message" rows="5" className="border rounded-xl px-3 py-2" placeholder="What's up?"></textarea>
        </label>
        <button className="px-4 py-2 rounded-xl bg-black text-white w-fit">Send</button>
      </motion.form>



      
    </section>
  )
}
