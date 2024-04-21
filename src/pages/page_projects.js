import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

const pageProjects = () => {
  gsap.registerPlugin(CustomEase)
  CustomEase.create('20_80', 'M0,0 C0.2,0 0.2,1 1,1 ')
  CustomEase.create('20_100', 'M0,0 C0.2,0 0,1 1,1 ')
  CustomEase.create('10_100', 'M0,0 C0.1,0 0,1 1,1 ')

  const anim_intro = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      '.pl_wrapper.is-nav_transition',
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
      {
        duration: 0.5,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        ease: '10_100',
      },
      0
    )
  }

  anim_intro()
}

export default pageProjects
