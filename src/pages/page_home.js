import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import SplitType from 'split-type'

const pageHome = () => {
  gsap.registerPlugin(CustomEase)
  CustomEase.create('20_80', 'M0,0 C0.2,0 0.2,1 1,1 ')
  CustomEase.create('20_100', 'M0,0 C0.2,0 0,1 1,1 ')
  const charYOffset = `200%`
  const charsStagger = 0.03
  const charsDuration = 0.7
  const linesDuration = 1.5
  const lineXDistance = 200
  const lineDelay = 1.4

  const st_line1 = new SplitType('.heading_line.is-01 h1', {
    types: 'words chars',
  })
  const st_line2 = new SplitType('.heading_line.is-02 h1', {
    types: 'words chars',
  })
  const st_line3 = new SplitType('.heading_line.is-03 h1', {
    types: 'words chars',
  })
  const st_line4 = new SplitType('.heading_line.is-04 h1', {
    types: 'words chars',
  })
  const st_line5 = new SplitType('.heading_line.is-05 h1', {
    types: 'words chars',
  })

  // Timeline is here
  const tl_main = gsap.timeline({ ease: 'none', repeat: -1 })
  const tl_line01 = gsap.timeline()
  const tl_line02 = gsap.timeline()
  const tl_line03 = gsap.timeline()
  const tl_line04 = gsap.timeline()
  const tl_line05 = gsap.timeline()

  tl_line01
    .from(
      st_line1.chars,
      {
        duration: charsDuration,
        y: charYOffset,
        stagger: {
          each: charsStagger,
          from: 'center',
        },
        ease: '20_80',
      },
      0
    )
    .from(
      '.heading_line.is-01',
      { duration: linesDuration, x: lineXDistance, ease: '20_100' },
      0
    )
  tl_line02
    .from(
      st_line2.chars,
      {
        duration: charsDuration,
        y: charYOffset,
        stagger: {
          each: charsStagger,
          from: 'center',
        },
        ease: '20_80',
      },
      0
    )
    .from(
      '.heading_line.is-02',
      { duration: linesDuration, x: -lineXDistance, ease: '20_100' },
      0
    )
  tl_line03
    .from(
      st_line3.chars,
      {
        duration: charsDuration,
        y: charYOffset,
        stagger: {
          each: charsStagger,
          from: 'center',
        },
        ease: '20_80',
      },
      0
    )
    .from(
      '.heading_line.is-03',
      { duration: linesDuration, x: lineXDistance, ease: '20_100' },
      0
    )
  tl_line04
    .from(
      st_line4.chars,
      {
        duration: charsDuration,
        y: charYOffset,
        stagger: {
          each: charsStagger,
          from: 'center',
        },
        ease: '20_80',
      },
      0
    )
    .from(
      '.heading_line.is-04',
      { duration: linesDuration, x: -lineXDistance, ease: '20_100' },
      0
    )
  tl_line05
    .from(
      st_line5.chars,
      {
        duration: charsDuration,
        y: charYOffset,
        stagger: {
          each: charsStagger,
          from: 'center',
        },
        ease: '20_80',
      },
      0
    )
    .from(
      '.heading_line.is-05',
      { duration: linesDuration, x: -lineXDistance, ease: '20_100' },
      0
    )

  tl_main
    .add(tl_line05, 0)
    .add(tl_line04, `-=${lineDelay}`)
    .add(tl_line03, `-=${lineDelay}`)
    .add(tl_line02, `-=${lineDelay}`)
    .add(tl_line01, `-=${lineDelay}`)
}

export default pageHome
