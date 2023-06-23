import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
// import porfolioImage7 from '../images/portfolio/portfolio-7.png';
// import porfolioImage8 from '../images/portfolio/portfolio-8.png';
// import porfolioImage9 from '../images/portfolio/portfolio-9.png';
// import porfolioImage10 from '../images/portfolio/portfolio-10.png';
// import porfolioImage11 from '../images/portfolio/portfolio-11.png';
// import resume from '../images/p';
import profilepic1 from '../images/profilepic.jpg';
// import photomine from '..images/profilepic2.jpg';
// import myPhoto from '../images/portfolio/profilepic2.jpg'
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Swayam Pandya',
  description: "My portfolio webpage",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Pandya, Swayam Pandya.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Vadodara based <strong className="text-stone-100">Computer Science and Engineering Student</strong>, currently studying
        at <strong className="text-stone-100">Parul University</strong> learning about core software development skills along side I also develop things.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me at<strong className="text-stone-100"> new food court ot my University</strong>,
        picking on my <strong className="text-stone-100">friends</strong>, or eating delicious food along with {' '}
        <strong className="text-stone-100">CHAI</strong>.
      </p> */}
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1Ivb2oMsr1otFGhu1EUAld0zVikAKcfed/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
}

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic1,
  description: `I am a passionate young web developer with five years of experience, seeking opportunities to learn and grow. I have a strong skill set and a goal-oriented mindset. I am not only proficient in my work but also a valuable team player. Continual improvement is my driving force, and I am always ready to take on new challenges.`,
  aboutItems: [
    {label: 'Location', text: 'Vadodara, Gujarat', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Writing, Painting, Musical instruments', Icon: SparklesIcon},
    {label: 'Study', text: 'Parul University', Icon: AcademicCapIcon},
    {label: 'Employment', text: ' BRB😊 ', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Gujarati',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Redux',
        level: 7,
      },
      {
        name: 'Tailwind CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'express js',
        level: 9,
      },
      {
        name: 'Rest API',
        level: 8,
      },
      {
        name: 'Mongo DB',
        level: 9,
      },
    ],
  },
  // {
  //   name: 'Web development',
  //   skills: [
  //     {
  //       name: 'React',
  //       level: 9,
  //     },
  //     {
  //       name: 'Redux',
  //       level: 4,
  //     },
  //     {
  //       name: 'MERN',
  //       level: 8,
  //     },
  //   ],
  // },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Swayam Keep',
    description: 'A google keep clone',
    url: 'https://swayampandy.netlify.app/projects/swayamkeep/',
    image: porfolioImage1,
  },
  {
    title: 'Chatter',
    description: 'End to end secure chat application',
    url: 'https://github.com/bhudevswayam/sp-chat',
    image: porfolioImage5,
  },
  {
    title: 'Web Alarm',
    description: 'React based alarm application',
    url: 'https://reactalarm.netlify.app/',
    image: porfolioImage4,
  },
  {
    title: 'Animix Shoping',
    description: 'E-commerce Website with React',
    url: 'https://animixshoping.netlify.app/',
    image: porfolioImage6,
  },
  {
    title: 'cranberry-crypto',
    description: 'A website using solidity and react for users to transfer Ethereum from one user',
    url: 'https://cranberrycrypto.netlify.app/',
    image: porfolioImage2,
  },
  {
    title: 'Swayam University',
    description: 'Front end practice',
    url: 'https://swayampandy.netlify.app/projects/unirersitywebsite/',
    image: porfolioImage3,
  }  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2040',
    location: 'Parul University',
    title: 'Computer Science and Engineering',
    content: <p>Here is my edcutation profile</p>,
  },
  
];

export const experience: TimelineItem[] = [
  // {
    
  //   date: 'March 2010 - Present',
  //   location: 'Awesome Development Company',
  //   title: 'Senior UX Engineer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
  // {
  //   date: 'March 2007 - February 2010',
  //   location: 'Garage Startup Studio',
  //   title: 'Junior bug fixer',
  //   content: (
  //     <p>
  //       Describe work, special projects, notable achievements, what technologies you have been working with, and
  //       anything else that would be useful for an employer to know.
  //     </p>
  //   ),
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Sparsh Pathak',
      text: "My friend, the talented young developer, is incredibly passionate and dedicated to web development. Their enthusiasm and drive to constantly improve is truly inspiring. They are a team player, always bringing a positive and collaborative attitude to projects. It's a pleasure to see them excel and make a meaningful impact in the field.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Bravim Purohit',
      text: "Swayam is a remarkable young developer, driven by a deep passion for their craft. They consistently strive for excellence and are always seeking opportunities to grow and learn. Their collaborative nature and positive attitude make them a joy to work with. Their dedication and talent truly set them apart in the field of web development.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Krishna Patel',
      text: "Working with my talented young developer has been a pleasure. Their passion and expertise in web development have consistently exceeded my expectations. They communicate effectively and deliver high-quality results, making them a valuable asset to any client.",
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Just ping me where ever you want. TBH I am mostly active on Instagram',
  items: [
    {
      type: ContactType.Email,
      text: '200303105040@paruluniversity.ac.in',
      href: 'mailto:200303105040@paruluniversity.ac.in',
    },
    {
      type: ContactType.Location,
      text: 'Vadodara, Gujarat',
      href: 'https://www.google.com/maps/dir/Kalol,+Gujarat+389330//@22.4584276,73.1844596,11z/data=!4m9!4m8!1m5!1m1!1s0x395e29ff2250f3dd:0x63aa40e498f37ec3!2m2!1d73.4625908!2d22.6099684!1m0!3e0',
    },
    {
      type: ContactType.Instagram,
      text: '@Bhudev_swayam',
      href: 'https://instagram.com/bhudev_swayam?igshid=NTc4MTIwNjQ2YQ==',
    },
    {
      type: ContactType.Github,
      text: 'bhudevswayam',
      href: 'https://github.com/bhudevswayam',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bhudevswayam'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://in.linkedin.com/in/swayam-pandya-6687651b9'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/bhudev_swayam'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/pandyaswayam'},
];
