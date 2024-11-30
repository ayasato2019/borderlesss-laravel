'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedCurtain() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const target = document.getElementById('blog-content')
    if (target) observer.observe(target)

    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-r from-blue-500 to-purple-500"
      initial={{ x: '-100%' }}
      animate={isVisible ? { x: '100%' } : { x: '-100%' }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />
  )
}

