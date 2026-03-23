/**
 * Visual demonstration section – placeholder for the Shoevera 9:16 cinematic video.
 * Set DEMO_VIDEO_URL in config (or pass videoSrc) to embed; otherwise shows a CTA to watch.
 */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function VideoDemo({ videoSrc = null }) {
  const showVideo = videoSrc && videoSrc.trim() !== ''
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="video-demo" id="demo">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          See Shoevera in Action
        </motion.h2>
        <motion.p
          className="video-demo-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Easy to wear, portable, and tough against rain and mud. Watch how it works.
        </motion.p>
        <motion.div
          className="video-demo-player"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {showVideo ? (
            <div className="video-demo-wrap aspect-9-16">
              <video
                src={videoSrc}
                controls
                playsInline
                className="video-demo-video"
                aria-label="Shoevera product demonstration video"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="video-demo-placeholder aspect-9-16">
              <div className="video-demo-placeholder-inner">
                <svg className="video-demo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="video-demo-placeholder-text">Product video coming soon</p>
                <p className="video-demo-placeholder-hint">Easy to wear · Portable · Easy to clean · Dirt resistant</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
