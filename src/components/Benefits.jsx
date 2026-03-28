import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BenefitIcons } from './Icons'

const benefits = [
  { icon: BenefitIcons.waterproof, title: 'Waterproof', text: 'Keeps feet and shoes dry in rain and puddles.' },
  { icon: BenefitIcons.cost, title: 'Cost-effective', text: 'One pair lasts. No need to replace ruined shoes.' },
  { icon: BenefitIcons.easy, title: 'Easy wear & carry', text: 'Quick to put on, remove, and pack away.' },
  { icon: BenefitIcons.reusable, title: 'Reusable & durable', text: 'Wash and reuse. Made to last the season.' },
  { icon: BenefitIcons.fits, title: 'Fits many shoes', text: 'Works with school, office, and casual shoes.' },
]

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section className="benefits alt" id="benefits">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Why Shoevera?
        </motion.h2>
        <motion.p
          className="benefits-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built for students, office workers, traders, boda boda riders, and daily commuters who need practical, affordable protection.
        </motion.p>
        <motion.div
          className="benefits-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            hidden: {},
          }}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className="benefit-card"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="benefit-icon benefit-icon-svg">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
