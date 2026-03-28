/**
 * Customer interview clip — same sound UX as hero: starts muted for autoplay policy;
 * use Sound on / Mute overlay. Native controls for play, pause, and scrubbing.
 */
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function VideoDemo({ videoSrc = null }) {
  const showVideo = videoSrc && videoSrc.trim() !== ''
  const ref = useRef(null)
  const videoRef = useRef(null)
  const [videoMuted, setVideoMuted] = useState(true)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    const next = !videoMuted
    setVideoMuted(next)
    v.muted = next
    if (!next) {
      v.play().catch(() => {})
    }
  }

  return (
    <section className="video-demo" id="demo">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Customer chat
        </motion.h2>
        <motion.p
          className="video-demo-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A quick interview with someone who tried Shoevera — tap play, then <strong>Sound on</strong> to listen.
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
                ref={videoRef}
                src={videoSrc}
                controls
                playsInline
                muted={videoMuted}
                className="video-demo-video"
                aria-label="Customer interview about Shoevera"
              >
                Your browser does not support the video tag.
              </video>
              <button
                type="button"
                className="hero-video-sound-btn video-demo-sound-btn"
                onClick={toggleMute}
                aria-pressed={!videoMuted}
                aria-label={videoMuted ? 'Unmute interview' : 'Mute interview'}
              >
                {videoMuted ? (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                    <span>Sound on</span>
                  </>
                ) : (
                  <>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                    <span>Mute</span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="video-demo-placeholder aspect-9-16">
              <div className="video-demo-placeholder-inner">
                <svg className="video-demo-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="video-demo-placeholder-text">Interview video coming soon</p>
                <p className="video-demo-placeholder-hint">Easy to wear · Portable · Easy to clean · Dirt resistant</p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
