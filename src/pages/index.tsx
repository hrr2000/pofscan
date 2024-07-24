import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import { api } from "@/utils/api";
import {HiMail} from 'react-icons/hi'
import {TiLocation} from 'react-icons/ti'
import {BsFillChatFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {MdBusinessCenter} from 'react-icons/md'

const educations = [
  {
    university: "Helwan University",
    degree: "Bachelor Degree",
    major: "Computer Science",
    skills: [
      'NextJs',
      'Tailwind',
      'AWS',
      'Firebase',
      'tRPC',
      'Java',
      'JavaFX',
      'C',
      'MATLAB',
      'Python',
      'AI',
      'ML',
    ]
  }
];

const experiences = [
  {
    logo: "/images/logos/taza.png",
    job_title: "Software Engineer & Co-founder",
    company_name: "Taza",
    duration: "7 months",
    start_date: "Dec 2023",
    end_date: "Present",
    address: "Cairo - Egypt",
    description: "I have spearheaded the creation of a mobile and web platform for the fresh produce market, leveraging AWS cloud for scalable infrastructure and integrating a streamlined SDLC for effective event sourcing and data analysis. Assembled and led a high-performing team to drive business objectives, overseeing comprehensive market operations including suppliers, traders, exports, and imports, ensuring high-quality and timely service delivery.",
    skills: [
      'Typescript',
      'ReactJs',
      'Redux',
      'React Query',
      'NextJs',
      'Tailwind',
      'React Native',
      'Nativewind', 
      'Expo',
      'AWS',
      'S3',
      'EC2',
      'Docker',
      'Docker Compose',
      'Nginx',
      'Django',
      'Postgres',
      'Gunicorn',
      'Python',
      'Jira',
      'Git & Github'
    ]
  },
  {
    logo: "/images/logos/cacao.png",
    job_title: "Software Engineer",
    company_name: "Cacao Systems",
    duration: "1 year",
    start_date: "Aug 2023",
    end_date: "Present",
    address: "Remote - Canada",
    description: "Crafted an enterprise software solution tailored for businesses, optimizing operational efficiency and boosting productivity in mass operations by engineering a user experience precisely aligned with client needs. Implemented a Monorepo structure for housing a core frontend library for reusable components across applications and an external framework like Streamlit, allowing AI team interaction with frontend components through Python, fostering collaboration and flexibility. Designed and integrated a shared state management logic, ensuring modularity and consistency while allowing flexibility for individual application evolution.",
    skills: [
      'ReactJs',
      'MUI',
      'Typescript',
      'Redux',
      'RTK Query',
      'PdfJs',
      'Python',
      'Streamlit',
      'ElectronJs',
      'Monorepo',
      'Nx',
      'Docker',
      'Docker Compose',
      'Fluentd',
      'Grafana',
      'Postgres',
      'FastAPI',
      'Starlette',
      'Apache HTTP',
      'AWS',
      'S3',
      'Jira',
      'Git & Github'
    ]
  },
  {
    logo: "/images/logos/microsoft.png",
    job_title: "Software Engineer Intern",
    company_name: "Microsoft",
    duration: "2 months",
    start_date: "Jul 2022",
    end_date: "Sep 2022",
    address: "Zamalek - Egypt",
    description: "Developed a debugging tool using React that significantly improved their efficiency in debugging by summarizing days of work in just a few clicks. Focused on optimizing performance for handling large files and datasets for better productivity and developer experience.",
    skills: [
      'ReactJs',
      'Tailwind',
      'Typescript',
      'Microsoft Azure',
    ]
  },
  {
    logo: "/images/logos/bld.png",
    job_title: "Software Engineer",
    company_name: "BLD.AI",
    duration: "4 months",
    start_date: "May 2022",
    end_date: "Sep 2022",
    address: "Remote - USA",
    description: "I have acquired proficiency in the primary technology stacks utilized by the company, including React, React Native, and Django, through my involvement in various internal projects.",
    skills: [
      'ReactJs',
      'React Native',
      'NextJs',
      'Tailwind',
      'Django',
      'AWS',
      'Web3',
    ]
  },
  {
    logo: "/images/logos/sand.png",
    job_title: "Frontend Developer",
    company_name: "Soft Kinetics",
    duration: "6 months",
    start_date: "Dec 2021",
    end_date: "May 2022",
    address: "Masr El Gdida - Egypt",
    description: "Designed and developed an e-commerce web app for a big cards provider in the Middle East, using NextJs the app features a shopping cart that supports multiple stores, themes, currencies, and languages. It also includes a rewards system, and advanced search and filtering functionalities.",
    skills: [
      'ReactJs',
      'NextJs',
      'Tailwind',
      'Laravel',
      'Wordpress',
      'Github Actions',
      'Jira',
      'Git & Github'
    ]
  },
  {
    logo: "/images/logos/los.png",
    job_title: "Full-stack Developer",
    company_name: "LOS DC",
    duration: "+30 clients",
    start_date: "Jul 2019",
    end_date: "Jan 2022",
    address: "Remote - Jordan",
    description: "Demonstrated expertise in delivering software solutions across diverse sectors, ensuring alignment with industry standards and exceeding client expectations. Successfully deployed software systems capable of accommodating hundreds of concurrent users, attaining optimal performance and reliability. Developed complex B2B software applications that seamlessly operate across multiple platforms, enhancing cross-functional efficiency and productivity.",
    skills: [
      'ReactJs',
      'React Native',
      'NextJs',
      'Tailwind',
      'MUI',
      'Laravel',
      'Wordpress',
      'jQuery',
      'Github Actions',
      'AWS',
      'Firebase',
    ]
  }
];


export default function Home() {
  return (
    <main className="grid grid-cols-12 min-h-[900px] max-w-[1580px] mx-auto text-gray-200 w-full h-screen">
      <div className="relative hidden lg:block lg:col-span-4 xl:col-span-3 px-8">
        <div className="flex items-center justify-end h-screen fixed">
          <div className="flex justify-end">
            <div className="border-[1px] rounded-3xl border-primary p-10 lg:max-w-[350px] max-w-[300px]">
            <div className="w-full flex justify-between items-end">
              <div className="flex flex-col w-full">
                <span className="text-lg">{"Hello, I'm"}</span>
                <h2 className="text-3xl font-bold">
                  Mostafa
                  <span className={`ms-3`}>Reda</span>
                </h2>
              </div>
            </div>
            <span className="">
              A Software Engineer
            </span>
            <div>
              <figure className="relative h-[300px] w-full rounded-3xl overflow-hidden my-8">
                <Image
                  draggable="false"
                  className="grayscale -mt-3"
                  src="/images/avatar-2.png"
                  alt="avatar"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                />
              </figure>
            </div>
            <div className="flex flex-col text-lg items-start">
              <h4 className="font-normal text-gray-100 flex items-center gap-2">
                <HiMail />
                mstfa.rda.2001@gmail.com
              </h4>
              <h4 className="font-normal text-gray-100 flex items-center gap-2">
                <TiLocation />
                Helwan - Cairo - Egypt
              </h4>
            </div>
            <div>
              <button className="w-full py-2 px-4 rounded-lg flex items-center gap-2 justify-center mt-6 bg-green-400 text-gray-900 text-xl font-normal hover:bg-green-600 transition">
                <BsFillChatFill />
                {"Let's Chat!"}
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7 p-4 lg:px-10">
        <section  className="min-h-screen flex flex-col justify-center">
          <span className="text-gray-300 border-[1px] px-5 border-primary py-1 rounded-full text-sm flex items-center gap-2 w-fit">
            <AiFillHome />
            INTRODUCE
          </span>
          <h3 className="text-5xl lg:text-7xl my-4 px-2 leading-snug font-bold">
            Hi from <span className="text-green-400"> Mostafa Reda</span>, A Software Engineer and Typist!
          </h3>
          <div className="py-5 px-2">
            <p className="text-secondary text-xl">
            Mostafa has been working in the software industry since 2018. He prioritizes non-functional requirements as first-class citizens in software development. While he employs logic to write code, he leverages appropriate philosophies to build software that solves problems and generates ROI.            </p>
          </div>
        </section>
        <section id="education" className="min-h-screen flex flex-col justify-center">
          <span className="text-gray-300 border-[1px] px-5 border-primary py-1 rounded-full text-sm flex items-center gap-2 w-fit">
            <FaGraduationCap />
            EDUCATION
          </span>
          {educations.map((education, idx) => {
            return (
              <div key={`education_${education.university}_${idx}`} className="py-5 px-2">
                <h3 className="text-4xl font-bold">
                    {education.university} <span className="text-green-400"> University </span>
                </h3>
                <p>
                  <strong>
                    {education.degree}
                  </strong>
                  <span> {education.major}</span>
                </p>
                <hr className="border-2 border-green-400 w-16 my-4" />
                <p className="text-secondary text-xl">
                </p>
                <div className="my-4 flex flex-wrap gap-4">
                  {education.skills.map((skill) => {
                    return (
                      <span key={`education_skill_${skill}`} className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
        <section id="experience" className="min-h-screen flex flex-col justify-center">
          <span className="text-gray-300 border-[1px] px-5 border-primary py-1 rounded-full text-sm flex items-center gap-2 w-fit">
            <MdBusinessCenter />
            EXPERIENCE
          </span>
          <div className="mb-10 flex flex-col gap-10">
            {experiences.map((experience, idx) => {
              return (
                <div key={`experience_${experience.company_name}_${idx}`} className="py-5 px-2">
                  <div className="flex gap-4">
                    <div>
                      <Image 
                        src={experience.logo}
                        height={100}
                        width={100} 
                        className="w-[100px] h-[100px] rounded-lg"
                        alt={""}
                      />
                    </div>
                    <div>
                      <h3 className="text-4xl mb-2 font-bold">
                          {experience.job_title}  <span className="text-green-400">@ {experience.company_name} </span>
                      </h3>
                      <div className="text-xl flex items-center gap-6">
                        <span>
                          <strong className="text-green-400"> {experience.duration} </strong> {experience.start_date} – {experience.end_date}
                        </span> 
                        <span>
                          @ {experience.address}
                        </span>
                      </div>
                      <hr className="border-2 border-green-400 w-16 my-4" />
                    </div>
                  </div>
                  <p className="text-secondary text-xl">
                    {experience.description}
                  </p>
                  <div className="my-4 flex flex-wrap gap-4">
                    {experience.skills.map((skill) => {
                      return (
                        <span key={`experience_skill_${skill}`} className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                          {skill}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
      <div className="col-span-1 p-10 flex flex-col items-center">
        <div className="border-[1px] text-xl bg-primary rounded-3xl border-primary text-secondary p-4 py-4 lg:py-8 w-fit fixed bottom-10 lg:bottom-auto left-1/2 lg:left-auto -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col gap-7">
          <a href="#" className="hover:text-green-400 transition">
            <AiFillHome />
          </a>
          <a href="#education" className="hover:text-green-400 transition">
            <FaGraduationCap />
          </a>
          <a href="#experience" className="hover:text-green-400 transition">
            <MdBusinessCenter />
          </a>
        </div>
      </div>
    </main>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
