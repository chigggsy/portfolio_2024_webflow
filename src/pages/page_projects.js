import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import Flip from 'gsap/Flip'

const pageProjects = () => {
  gsap.registerPlugin(CustomEase)
  gsap.registerPlugin(Flip)
  CustomEase.create('20_80', 'M0,0 C0.2,0 0.2,1 1,1 ')
  CustomEase.create('20_100', 'M0,0 C0.2,0 0,1 1,1 ')
  CustomEase.create('10_100', 'M0,0 C0.1,0 0,1 1,1 ')

  const anim_intro = () => {
    const tl = gsap.timeline()
    tl.fromTo(
      '.pl_wrapper',
      { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.67,
        ease: '10_100',
      },
      0
    )
      .from(
        '.project_item-heading',
        {
          duration: 1,
          ease: '20_80',
          opacity: 0,
          y: 14,
          stagger: { each: 0.06, from: 'end' },
        },
        0
      )
      .from(
        '.project_item-year',
        {
          duration: 1,
          opacity: 0,
          x: -24,
          stagger: { each: 0.06, from: 'end' },
        },
        0
      )
      .from(
        '.project_item-industry',
        {
          duration: 1,
          opacity: 0,
          x: 24,
          stagger: { each: 0.06, from: 'end' },
        },
        0.2
      )
  }

  const hover_project = () => {
    const projectTitleList = gsap.utils.toArray('.project_item')
    const projectThumbnailList = gsap.utils.toArray('.project_menu-thumbnail')
    const projectItemWrapper = document.querySelector('.project_item-wrapper')

    projectTitleList.forEach((project) => {
      project.addEventListener('mouseenter', () => {
        const selectedProjectThumbnail = project.dataset.projectTitle
        const unselectedProjectsThumbnails = projectThumbnailList.filter(
          (thumb) => thumb.dataset.projectThumbnail !== selectedProjectThumbnail
        )
        const unselectedTitles = projectTitleList.filter(
          (title) => title.dataset.projectTitle !== project.dataset.projectTitle
        )

        const tl = gsap.timeline({
          defaults: { duration: 0.5, ease: '10_100' },
        })
        tl.to(`[data-project-thumbnail="${selectedProjectThumbnail}"]`, {
          top: '-10vh',
          zIndex: 2,
        })
          .to(project, { opacity: 1 }, 0)
          .to(unselectedTitles, { opacity: 0.3 }, 0)
          .to(unselectedProjectsThumbnails, { top: '0vh', zIndex: 1 }, 0)
      })
    })

    projectItemWrapper.addEventListener('mouseleave', () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: '10_100' },
      })
      tl.to('.project_item', { opacity: 1 }, 0).to(
        projectThumbnailList,
        { top: '0vh' },
        0
      )
    })
  }

  const click_project = () => {
    const projectItemList = gsap.utils.toArray('.project_item')
    const projectThumbnailList = gsap.utils.toArray('.project_menu-thumbnail')
    const flip_thumbnailTarget = document.querySelector('.flip_project-image')
    const flip_headingTarget = document.querySelector(
      '.flip_project.is-heading'
    )

    projectItemList.forEach((projectItem) => {
      projectItem.addEventListener('click', (event) => {
        event.preventDefault()
        const selectedProjectTitle = projectItem.dataset.projectTitle
        const unselectedItems = projectItemList.filter(
          (item) => item.dataset.projectTitle !== selectedProjectTitle
        )
        const unselectedThumbnails = projectThumbnailList.filter(
          (thumbnail) =>
            thumbnail.dataset.projectThumbnail !== selectedProjectTitle
        )
        const projectItemDetails = gsap.utils.toArray(
          projectItem.querySelectorAll(
            '.project_item-year, .project_item-industry'
          )
        )

        // Flip Animation
        const flipAnimation = () => {
          let state_heading = Flip.getState(projectItem.querySelector('h1'))
          flip_headingTarget.appendChild(projectItem.querySelector('h1'))
          Flip.from(state_heading, {
            duration: 0.6,
            ease: '20_100',
          })

          const selectedThumbnail = document.querySelector(
            `[data-project-thumbnail="${selectedProjectTitle}"]`
          )
          let state_image = Flip.getState(selectedThumbnail)
          flip_thumbnailTarget.appendChild(selectedThumbnail)
          Flip.from(state_image, {
            duration: 0.6,
            ease: '20_100',
            onComplete: () => {
              gsap.set('.project_menu-thumbnail', { clearProps: 'all' })
              window.location.href = `/projects/${selectedProjectTitle}`
            },
          })
        }

        // Animation
        const tl = gsap.timeline({
          onComplete: () => {
            flipAnimation()
            gsap.set(unselectedItems, { display: 'none' })
          },
        })

        tl.to(
          unselectedItems,
          {
            duration: 0.6,
            ease: '20_100',
            stagger: { each: 0.06, from: 'end' },
            opacity: 0,
          },
          0
        )
          .to(unselectedThumbnails, { duration: 0, display: 'none' }, 0)
          .to(projectItemDetails, { opacity: 0 }, 0.5)
      })
    })
  }

  anim_intro()
  hover_project()
  click_project()
}

export default pageProjects
