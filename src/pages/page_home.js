import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { Flip } from 'gsap/Flip'
import SplitType from 'split-type'

const pageHome = () => {
  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(Flip)
  CustomEase.create('20_80', 'M0,0 C0.2,0 0.2,1 1,1 ')
  CustomEase.create('20_100', 'M0,0 C0.2,0 0,1 1,1 ')
  CustomEase.create('10_100', 'M0,0 C0.1,0 0,1 1,1 ')

  const anim_intro = () => {
    // Image Reveal Timelines
    const tl_imageReveal = gsap.timeline()
    const tl_image01 = gsap.timeline({
      defaults: { ease: '10_100' },
    })
    const tl_image02 = gsap.timeline({
      defaults: { ease: '10_100' },
      onComplete: function () {
        gsap.set('.pl_image-wrapper.is-01', { display: 'none' })
        gsap.set('.pl_image-wrapper.is-02', { display: 'none' })
      },
    })
    const tl_image03 = gsap.timeline({
      defaults: { ease: '10_100' },
    })
    const tl_image04 = gsap.timeline({ defaults: { ease: '10_100' } })
    const tl_image05 = gsap.timeline({
      defaults: { ease: '10_100' },
    })
    tl_image01
      .to('.pl_wrapper .pl_blank', { duration: 0, display: 'none' }, 0)
      .to(
        '.pl_image-wrapper.is-01',
        {
          duration: 0.67,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        0
      )
      .to(
        '.pl_image-wrapper.is-01 .pl_image',
        {
          duration: 1.17,
          scale: 1,
        },
        0
      )
    tl_image02
      .to(
        '.pl_image-wrapper.is-02',
        {
          duration: 0.67,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        0
      )
      .to(
        '.pl_image-wrapper.is-02 .pl_image',
        {
          duration: 1.17,
          scale: 1,
        },
        0
      )
      .to('.pl_wrapper', { duration: 0, backgroundColor: 'white' })
    tl_image03
      .to(
        '.pl_image-wrapper.is-03',
        {
          duration: 0.67,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        0
      )
      .to(
        '.pl_image-wrapper.is-03 .pl_image',
        {
          duration: 1.17,
          scale: 1,
        },
        0
      )
    tl_image04
      .to(
        '.pl_image-wrapper.is-04',
        {
          duration: 0.67,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        },
        0
      )
      .to(
        '.pl_image-wrapper.is-04 .pl_image',
        {
          duration: 1.17,
          scale: 1,
        },
        0
      )
    tl_image05.fromTo(
      '.pl_wrapper',
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      },

      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.67,
      },
      0
    )

    tl_imageReveal
      .add(tl_image01, 0)
      .add(tl_image02, 0.35)
      .add(tl_image03, 0.7)
      .add(tl_image04, 1.05)
      .add(tl_image05, 1.4)

    // Heading Timeline Controls
    const charYOffset = `200%`
    const charsStagger = 0.03
    const charsDuration = 0.7
    const linesDuration = 1.5
    const lineXDistance = 200
    const lineDelay = 1.35
    const timescale = 1.5

    const st_line1 = new SplitType('.heading_line.is-01 h1', {
      types: 'lines words chars',
    })
    const st_line2 = new SplitType('.heading_line.is-02 h1', {
      types: 'words chars',
    })
    const st_line3 = new SplitType('.heading_line.is-03 h1', {
      types: 'lines words chars',
    })
    const st_line4 = new SplitType('.heading_line.is-04 h1', {
      types: 'words chars',
    })
    const st_line5 = new SplitType('.heading_line.is-05 h1', {
      types: 'words chars',
    })

    // Heading Timeline Subsections
    const tl_textReveal = gsap.timeline({
      ease: 'none',
    })
    const tl_line01 = gsap.timeline()
    const tl_line02 = gsap.timeline()
    const tl_line03 = gsap.timeline()
    const tl_line04 = gsap.timeline()
    const tl_line05 = gsap.timeline()
    const tl_labels = gsap.timeline({
      defaults: { opacity: 0, ease: '20_100', duration: 2 },
    })
    const tl_remainingIntroUI = gsap.timeline()

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
        '.heading_line.is-01 .line',
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
        '.heading_line.is-03 .line',
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
        {
          duration: linesDuration,
          x: -lineXDistance,
          ease: '20_100',
        },
        0
      )
    tl_labels
      .from('.label.is-the', { x: -30 }, 0)
      .from('.label.is-of', { x: 30 }, 0)
      .from('.ampersand', { y: 20 }, 0.1)
      .from('.label.is-year', { y: 20 }, 0.1)

    tl_remainingIntroUI
      .from(
        '.navbar a',
        {
          duration: 2,
          opacity: 0,
          stagger: { each: 0.05, from: 'end' },
          ease: '20_80',
        },
        0
      )
      .from(
        '.socials_wrapper a',
        {
          duration: 2,
          opacity: 0,
          stagger: { each: 0.05, from: 'end' },
          ease: '20_80',
        },
        0
      )
      .fromTo(
        '.image_group',
        {
          clipPath: 'polygon(0% 66.7%, 100% 66.7%, 100% 66.7%, 0% 66.7%)',
        },
        {
          clipPath: 'polygon(0% 33.3%, 100% 33.3%, 100% 66.7%, 0% 66.7%)',
          duration: 0.8,
          ease: '20_100',
          stagger: 0.075,
        },
        0
      )

    tl_textReveal
      .add(tl_line05, 0)
      .add(tl_line04, `-=${lineDelay}`)
      .add(tl_line03, `-=${lineDelay}`)
      .add(tl_line02, `-=${lineDelay}`)
      .add(tl_line01, `-=${lineDelay}`)
      .add(tl_labels, `-=0.8`)
      .add(tl_remainingIntroUI, 1)
      .timeScale(timescale)

    // Main Intro Timeline
    const tl_main = gsap.timeline({
      onComplete: function () {
        gsap.set('.pl_wrapper', { display: 'none' })
      },
    })

    tl_main.add(tl_imageReveal, 1).add(tl_textReveal, '-=0.9')
  }

  const anim_clipPath = () => {
    let viewportWidth
    let thirdWidth
    let pastState = 0

    function updateViewportDimensions() {
      viewportWidth = window.innerWidth
      thirdWidth = viewportWidth / 3
    }

    updateViewportDimensions()
    window.addEventListener('resize', updateViewportDimensions)

    window.addEventListener('mousemove', (event) => {
      let latestState = 0
      const mouseX = event.clientX

      if (mouseX < thirdWidth) {
        latestState = 1
      } else if (mouseX < thirdWidth * 2) {
        latestState = 2
      } else {
        latestState = 3
      }

      if (latestState !== pastState) {
        pastState = latestState

        if (pastState === 1) {
          const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 1 },
          })
          tl.to('.image_group', {
            clipPath: 'polygon(-100% 66.7%, 0% 66.7%, 0% 100%, -100% 100%)',
          })
        } else if (pastState === 2) {
          const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 1 },
          })
          tl.to('.image_group', {
            clipPath: 'polygon(0% 33.3%, 100% 33.3%, 100% 66.7%, 0% 66.7%',
          })
        } else {
          const tl = gsap.timeline({
            defaults: { ease: 'power3.out', duration: 1 },
          })
          tl.to('.image_group', {
            clipPath: 'polygon(100% 0%, 200% 0%, 200% 33.3%, 100% 33.3%',
          })
        }
      }
    })
  }

  const anim_galleryTransforms = () => {
    const galleryRotate = () => {
      const tl = gsap.timeline({
        defaults: { duration: 90, ease: 'none' },
        repeat: -1,
      })
      tl.to('.image_gallery', { rotate: 360 }, 3).to(
        '.image_group',
        { rotate: -360 },
        3
      )
    }
    const followCursor = () => {
      let galleryX = 0
      let galleryY = 0
      let viewportWidth
      let viewportHeight

      function updateViewportDimensions() {
        viewportWidth = window.innerHeight
        viewportHeight = window.innerHeight
      }

      updateViewportDimensions()

      window.addEventListener('resize', function () {
        updateViewportDimensions()
      })

      window.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX
        const mouseY = event.clientY

        galleryX = gsap.utils.mapRange(0, viewportWidth, -7.5, 7.5, mouseX)
        galleryY = gsap.utils.mapRange(0, viewportHeight, -7.5, 7.5, mouseY)

        gsap.to('.image_gallery', {
          duration: 1,
          ease: 'power3.out',
          x: `${galleryX}vw`,
          y: `${galleryY}vw`,
        })
      })
    }
    galleryRotate()
    followCursor()
  }

  const link_hover = () => {
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

  // Currently working on this <----------------------------------------------
  const navigate_projects = () => {
    const imageGroupList = gsap.utils.toArray('.image_group')
    const linkProject = document.querySelector('.nav_item.is-projects')
    const galleryFlipContainer = document.querySelector(
      '.gallery_flip-container'
    )

    linkProject.addEventListener('click', (event) => {
      event.preventDefault()
      let state = Flip.getState('.image_group')
      imageGroupList.forEach((imageGroup) => {
        imageGroup.appendChild(galleryFlipContainer)
        Flip.from(state, { duration: 1.5, ease: 'power3.inOut' }, 0)
      })
    })
  }

  anim_intro()
  anim_galleryTransforms()
  setTimeout(() => {
    anim_clipPath()
  }, 3500)
  link_hover()
  navigate_projects()
}

export default pageHome
