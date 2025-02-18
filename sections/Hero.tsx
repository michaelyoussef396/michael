import React from 'react'
import { Spotlight } from '../components/ui/Spotlight'
import { HeroParallax } from '../components/ui/hero-parallaz'
import MagicButton from '../components/ui/MagicButton'

const Hero = () => {
    const products = [
        {
            title: "Social Sphere",
            link: "https://www.socialsphere.icu/",
            thumbnail:
              "/socialsphere.png",
          },
          {
            title: "Eden International",
            link: "https://www.edeninternational.in",
            thumbnail:
              "/edeninternational.png",
        },
        {
            title: "Quality Care",
            link: "https://qualitycareproviders.com.au/",
            thumbnail:
              "/qualitycare.png",
        },
        {
            title: "Mould & Restoration",
            link: "https://mouldandrestoration.com.au/",
            thumbnail:
              "/mouldandrestoration.png",
        },
        
        {
            title: "Sole Media",
            link: "https://solemedia.com.au/",
            thumbnail:
              "/solemedia.png",
        },
        {
            title: "meta verse madness",
            link: "https://metaversemadnessss.netlify.app/",
            thumbnail:
              "/thumbnail5.png",
        },
        {
            title: "Nike website",
            link: "https://michael-nike-clone.netlify.app/",
            thumbnail:
              "/thumbnail2.png",
          },
          {
            title: "Mavi Events",
            link: "https://mavi-events-i4i69e5rr-michaelyoussef396s-projects.vercel.app/",
            thumbnail:
              "/mavievents.png",
        },
        {
            title: "brainwave ai",
            link: "https://michael-ai-landing-page.netlify.app/",
            thumbnail:
              "/thumbnail3.png",
        },
        {
            title: "Iphone 15 pro max",
            link: "https://apple-iphone-15-pro.netlify.app/",
            thumbnail:
              "/thumbnail1.png",
        },
        
        {
            title: "the waypoint",
            link: "thewaypoint.netlify.app/",
            thumbnail:
              "/thumbnail4.png",
        },
        {
            title: "meta verse madness",
            link: "https://metaversemadnessss.netlify.app/",
            thumbnail:
              "/thumbnail5.png",
        },

          
          
    ]
    return (
    <div className='pb-20 pt-30'>
        <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vh]' fill='white' />
        </div>

        <div className='flex justify-center'>
        <HeroParallax products={products} />
        </div>
    </div>
  )
}

export default Hero
