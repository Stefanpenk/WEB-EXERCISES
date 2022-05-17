gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.animation',
    start: 'center center',
    end: 'center 20%',
    scrub: 1,
    pin: '.animation',
    markers: true,
    // toggleActions: 'restart pause reverse pause'
  }
})

tl.to('.paper-plane', {

  motionPath: {
    path: [{
        x: 100,
        y: -20
      },
      {
        x: 300,
        y: 10
      },
      {
        x: 500,
        y: 100
      },
      {
        x: 750,
        y: -100
      },
      {
        x: 350,
        y: -50
      },
      {
        x: 600,
        y: 100
      },
      {
        x: 800,
        y: 0
      },
      {
        x: window.innerWidth,
        y: -250
      }

    ],
    curviness: 1.25,
    autoRotate: true,
  },
  duration: 5,
  ease: "power1.inOut",
});