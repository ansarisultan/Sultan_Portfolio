import { useScroll, useTransform } from 'framer-motion'

export const useParallax = (distance = 100) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, distance])
  return y
}

export const useScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  return scrollYProgress
}