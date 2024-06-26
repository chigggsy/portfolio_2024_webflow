import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

const pageGlobal = () => {
  gsap.registerPlugin(CustomEase)
  CustomEase.create('20_80', 'M0,0 C0.2,0 0.2,1 1,1 ')
  CustomEase.create('20_100', 'M0,0 C0.2,0 0,1 1,1 ')
  CustomEase.create('10_100', 'M0,0 C0.1,0 0,1 1,1 ')

  const navLinks = () => {
    const body = document.querySelector('body')
    const navLinks = gsap.utils.toArray('.navbar a, .socials_wrapper a')
    const navProjects = navLinks[0]

    function handleMouseOver() {
      this.style.color = 'var(--white)'
      body.style.backgroundColor = 'var(--brand)'
      gsap.set(this, { zIndex: 10 }, 0)
    }

    function handleMouseOut() {
      this.style.color = 'var(--brand)'
      body.style.backgroundColor = 'var(--white)'
      gsap.set(this, { zIndex: 0 }, 0)
    }

    // Hover interaction
    navLinks.forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver)
      link.addEventListener('mouseout', handleMouseOut)
    })

    // Clicking Projects on the Home page
    navProjects.addEventListener('click', (event) => {
      event.preventDefault()
      navLinks.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver)
        link.removeEventListener('mouseout', handleMouseOut)
      })

      gsap.set('body', { backgroundColor: 'var(--brand)' })
      let bottomMostImage
      const imageGroup = gsap.utils.toArray('.image_group')
      const imagePositions = imageGroup.map((image, index) => {
        const rect = image.getBoundingClientRect()
        return {
          index: index,
          YPos: rect.top,
        }
      })
      imagePositions.sort((a, b) => b.YPos - a.YPos)
      bottomMostImage = imagePositions[0].index

      if (window.location.pathname === '/') {
        const tl = gsap.timeline({
          defaults: {
            duration: 0.5,
            ease: '20_100',
            stagger: { each: 0.075, from: bottomMostImage },
          },
          onComplete: () => {
            window.location.href = '/projects'
          },
        })
        tl.to(imageGroup, {
          clipPath: 'polygon(100% 0%, 200% 0%, 200% 0%, 100% 0%)',
        })
      }
    })
  }

  navLinks()
}

export default pageGlobal
