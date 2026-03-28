import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ProblemIcons } from './Icons'

const items = [
  {
    icon: ProblemIcons.shoes,
    title: 'Dirty or damaged shoes',
    text: 'One walk in the rain and your office or school shoes are soaked and stained.',
  },
  {
    icon: ProblemIcons.rain,
    title: 'Muddy roads & flooded paths',
    text: 'Urban and peri-urban areas get waterlogged; your shoes take the hit every time.',
  },
  {
    icon: ProblemIcons.boots,
    title: 'Gumboots or extra shoes?',
    text: 'Heavy, bulky, or awkward to carry. You need something simple and light.',
  },
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <section className="problem alt" id="problem">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Sound Familiar?
        </motion.h2>
        <motion.p
          className="problem-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Rainy season and muddy roads make it tough to keep your shoes clean; and replacing them is expensive.
        </motion.p>
        <motion.div
          className="problem-grid"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            hidden: {},
          }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="problem-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="problem-icon problem-icon-svg">{item.icon}</div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
