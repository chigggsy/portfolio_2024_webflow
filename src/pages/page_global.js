import { gsap } from 'gsap'

const pageGlobal = () => {
  const navLinks = () => {
    const body = document.querySelector('body')
    const navLinks = document.querySelectorAll('.navbar a, .socials_wrapper a')

    navLinks.forEach((link) => {
      link.addEventListener('mouseover', () => {
        link.style.color = 'var(--white)'
        body.style.backgroundColor = 'var(--brand)'
        gsap.set(link, { zIndex: 10 }, 0)
      })
      link.addEventListener('mouseout', () => {
        link.style.color = 'var(--brand)'
        body.style.backgroundColor = 'var(--white)'
        gsap.set(link, { zIndex: 0 }, 0)
      })
    })
  }

  navLinks()
}

export default pageGlobal
