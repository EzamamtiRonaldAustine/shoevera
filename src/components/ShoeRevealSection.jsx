/**
 * Lando Norris–style section: hover over shoes to reveal them protected with Shoevera.
 * Default = shoe. Hover = shoe inside Shoevera.
 */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import HoverRevealShoe from './HoverRevealShoe'

export default function ShoeRevealSection({
  shoeImage = null,
  shoeWithShoeveraImage,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="shoe-reveal" id="shoe-reveal">
      <div className="container" ref={ref}>
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          See the difference
        </motion.p>
        <motion.h2
          className="shoe-reveal-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your shoe. <span className="shoe-reveal-accent">Protected.</span>
        </motion.h2>
        <motion.p
          className="shoe-reveal-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Hover to reveal your shoe inside Shoevera—the translucent cover that keeps it dry and clean.
        </motion.p>

        <motion.div
          className="shoe-reveal-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            hidden: {},
          }}
        >
          <motion.div
            className="shoe-reveal-item"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <HoverRevealShoe
              shoeImage={shoeImage}
              shoeWithShoeveraImage={shoeWithShoeveraImage}
              label="Hover to reveal"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
