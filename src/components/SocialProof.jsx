import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const testimonials = [
    {
      quote: "I don't worry about mud on the way to campus anymore. I just slip on Shoevera and my shoes stay clean.",
      author: 'Gareth, UCU Student',
    },
    {
      quote: "As a boda rider, I need something quick. Shoevera goes on and off in seconds. Worth every shilling.",
      author: 'Bodaboda rider',
    },
    {
      quote: "Office shoes used to get ruined every rainy season. Now I wear Shoevera to the office gate and take it off. Simple.",
      author: 'Isa, Body Tech Gym Instructor',
    },
  ]
  return (
    <section className="social-proof alt" id="reviews">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Used by People Who Walk Through Rain Every Day
        </motion.h2>
        <motion.p
          className="social-proof-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Students, commuters, and workers across Uganda are keeping their shoes dry with Shoevera.
        </motion.p>
        <motion.div
          className="testimonials"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            hidden: {},
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial testimonial-block"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">{t.author}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
