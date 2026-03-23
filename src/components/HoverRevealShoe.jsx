/**
 * Lando Norris–style hover reveal: default shows shoe, hover reveals shoe inside Shoevera.
 * Add public/shoe.png for "shoe only" state; uses shoeWithShoevera for hover reveal.
 * Touch devices: tap to toggle reveal.
 */
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HoverRevealShoe({
  shoeImage = null,
  shoeWithShoeveraImage,
  label = 'Hover to reveal',
  className = '',
}) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [shoeError, setShoeError] = useState(false)
  const [hoverError, setHoverError] = useState(false)
  const showShoe = shoeImage && !shoeError
  const showHover = shoeWithShoeveraImage && !hoverError

  return (
    <motion.div
      className={`hover-reveal-shoe ${className}`}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
      onClick={() => setIsRevealed((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setIsRevealed((prev) => !prev)}
      aria-label="Tap or hover to reveal shoe with Shoevera"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="hover-reveal-shoe-inner">
        {/* Background layer: shoe only (default state) */}
        <div className="hover-reveal-shoe-layer hover-reveal-shoe-default">
          {showShoe ? (
            <img
              src={shoeImage}
              alt="Your shoe"
              onError={() => setShoeError(true)}
            />
          ) : (
            <div className="hover-reveal-shoe-placeholder">
              <ShoeIcon />
              <span>Your shoe</span>
            </div>
          )}
        </div>

        {/* Reveal layer: shoe inside Shoevera (hover state) - fades in on hover */}
        {showHover && (
          <motion.div
            className="hover-reveal-shoe-layer hover-reveal-shoe-reveal"
            initial={false}
            animate={{
              opacity: isRevealed ? 1 : 0,
              scale: isRevealed ? 1 : 1.05,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={shoeWithShoeveraImage}
              alt="Shoe protected with Shoevera"
              onError={() => setHoverError(true)}
            />
          </motion.div>
        )}
      </div>

      <span className="hover-reveal-shoe-label">{label}</span>
    </motion.div>
  )
}

function ShoeIcon() {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hover-reveal-shoe-icon"
    >
      <path d="M10 35c0-5 5-10 15-10s15 5 15 10" />
      <path d="M10 35h50v2H10z" />
      <path d="M15 25c0-8 8-15 20-15s20 7 20 15" />
    </svg>
  )
}
