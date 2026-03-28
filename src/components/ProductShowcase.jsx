import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { getWhatsAppUrl } from '../config'

export default function ProductShowcase({ productImage }) {
  const [imageError, setImageError] = useState(false)
  const showImage = productImage && !imageError
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="showcase" id="product">
      <div className="container" ref={ref}>
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          The product
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built for Everyday Use
        </motion.h2>
        <motion.p
          className="showcase-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Lightweight, durable materials and a simple design; so you can focus on your day, not on your shoes. Waterproof, portable, and easy to clean.
        </motion.p>
        <motion.div
          className="showcase-main"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="showcase-image">
            {showImage ? (
              <img src={productImage} alt="Shoevera product" onError={() => setImageError(true)} />
            ) : (
              <div className="img-placeholder">
                Add <code>public/product.jpg</code> or your own product photo
              </div>
            )}
          </div>
          <div className="showcase-details">
            <h3>Quality you can rely on</h3>
            <p>
              Strong, waterproof material that resists tears and wear. Easy to clean; wipe or rinse and air dry. Compact enough to keep in your bag or on your boda.
            </p>
            <p className="showcase-price">
              Affordable, student-friendly pricing <span>(contact for current price)</span>
            </p>
            <a href={getWhatsAppUrl()} className="btn btn-primary btn-whatsapp" target="_blank" rel="noopener noreferrer">
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
