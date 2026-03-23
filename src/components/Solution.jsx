import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Solution({ howToUseImage }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const steps = [
    {
      num: 1,
      title: 'Slip on',
      text: 'Pull Shoevera over your shoes before you step into rain or mud. Fits different shoe types.',
    },
    {
      num: 2,
      title: 'Walk with confidence',
      text: 'Your shoes stay dry and clean. Easy to walk in; no bulk, no hassle.',
    },
    {
      num: 3,
      title: 'Remove & reuse',
      text: 'Take them off when you’re inside. Wipe or rinse, pack away, use again next time.',
    },
  ]
  return (
    <section className="solution" id="how-it-works">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Meet Shoevera
        </motion.h2>
        <motion.p
          className="solution-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A lightweight cover you wear over your existing shoes. Slip it on when it rains or the path is dirty; take it off when you’re inside. That’s it.
        </motion.p>
        {howToUseImage && (
          <motion.div
            className="solution-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img src={howToUseImage} alt="How to put on Shoevera shoe covers" />
          </motion.div>
        )}
        <motion.div
          className="solution-steps"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            hidden: {},
          }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              className="step"
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <span className="step-num">{step.num}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
