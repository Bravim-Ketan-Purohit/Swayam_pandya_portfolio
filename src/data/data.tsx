import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
        I'm a Kalol based <strong className="text-stone-100">Computer Science and Engineering Student</strong>, currently studying
        in <strong className="text-stone-100">Parul University</strong> learning about core software development skills along side I also develop things.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me at<strong className="text-stone-100">new food court ot my University</strong>,
        picking on my <strong className="text-stone-100">friends</strong>, or eating delicious food along with {' '}
        <strong className="text-stone-100">CHAI</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic1,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Kalol, Vadodara', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Web Dev, Fluit, Guitar', Icon: SparklesIcon},
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
        level: 7,
      },
      {
        name: 'Rest API',
        level: 6,
      },
      {
        name: 'Mongo DB',
        level: 8,
      },
    ],
  },
  {
    name: 'Web development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Redux',
        level: 4,
      },
      {
        name: 'MERN',
        level: 3,
      },
    ],
  },
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
    description: 'end to end secure chat application',
    url: 'https://swayampandy.netlify.app/projects/chat%20box/index.html',
    image: porfolioImage2,
  },
  {
    title: 'Static frontend web practice',
    description: 'clone of a university website',
    url: 'https://swayampandy.netlify.app/projects/unirersitywebsite/',
    image: porfolioImage3,
  },
  {
    title: 'Random jokes generator',
    description: 'Random jokes generator',
    url: 'https://swayampandy.netlify.app/projects/apijoke/api',
    image: porfolioImage4,
  },
  {
    title: 'cranberry-crypto',
    description: 'made during a hackathon',
    url: 'https://cranberrycrypto.netlify.app/',
    image: porfolioImage4,
  },
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2020',
    location: 'Parul University',
    title: 'Computer Science and Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
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
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Bravim Purohit',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: '200303105040@paruluniversity.ac.in',
      href: 'mailto:200303105040@paruluniversity.ac.in',
    },
    {
      type: ContactType.Location,
      text: 'Kalol, Vadodara',
      href: 'https://www.google.com/maps/dir/Kalol,+Gujarat+389330//@22.4584276,73.1844596,11z/data=!4m9!4m8!1m5!1m1!1s0x395e29ff2250f3dd:0x63aa40e498f37ec3!2m2!1d73.4625908!2d22.6099684!1m0!3e0',
    },
    {
      type: ContactType.Instagram,
      text: '@Bhudev_swayam',
      href: 'https://instagram.com/bhudev_swayam?igshid=NTc4MTIwNjQ2YQ==',
    },
    {
      type: ContactType.Github,
      text: 'bhudev_swayam',
      href: 'https://github.com/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/'},
];
