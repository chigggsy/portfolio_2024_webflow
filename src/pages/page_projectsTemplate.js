import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const pageProjectsTemplate = () => {
  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(ScrollTrigger)
  CustomEase.create('20_80', 'M0,0 C0.2,0 0.2,1 1,1 ')
  CustomEase.create('20_100', 'M0,0 C0.2,0 0,1 1,1 ')
  CustomEase.create('10_100', 'M0,0 C0.1,0 0,1 1,1 ')

  const anim_intro = () => {
    const tl = gsap.timeline()
    tl.to('.project_tag', { opacity: 1, stagger: 0.03, ease: 'none' }, 0)
  }

  const anim_pageScroll = () => {
    // Project title disappear on scroll
    gsap.to('.section.is-projectheading h1', {
      opacity: 0,
      scrollTrigger: {
        trigger: 'section.is-projectgallery',
        start: 'top top',
        toggleActions: 'play none none reset',
      },
    })
  }

  anim_intro()
  anim_pageScroll()
}

export default pageProjectsTemplate
