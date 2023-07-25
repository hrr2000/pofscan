import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image'
import { api } from "@/utils/api";
import {HiMail} from 'react-icons/hi'
import {TiLocation} from 'react-icons/ti'
import {BsFillChatFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {FaGraduationCap} from 'react-icons/fa'
import {MdBusinessCenter} from 'react-icons/md'

export default function Home() {

  return (
    <main className="grid grid-cols-12 min-h-[900px] max-w-[1580px] mx-auto text-gray-200 w-full h-screen">
      <div className="relative hidden lg:block lg:col-span-4 xl:col-span-3 p-8">
        <div className="fixed flex justify-end">
          <div className="border-[1px] rounded-3xl border-primary p-10 lg:max-w-[350px] max-w-[300px]">
          <div className="w-full flex justify-between items-end">
            <div className="flex flex-col w-full">
              <span className="text-lg">{"Hello, I'm"}</span>
              <h2 className="text-3xl font-normal">
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
      <div className="col-span-12 lg:col-span-7 p-4 py-10 lg:p-10">
        <div className="lg:py-32">
          <span className="text-gray-300 border-[1px] px-5 border-primary py-1 rounded-full text-sm flex items-center gap-2 w-fit">
            <AiFillHome />
            INTRODUCE
          </span>
          <h3 className="text-5xl lg:text-7xl font-thin my-4 px-2 leading-snug">
            Say Hi from <span className="text-green-400"> Mostafa Reda </span>, Software Engineer and Typist...
          </h3>
          <div className="py-5 px-2">
            <p className="text-secondary text-xl font-thin">
              Mostafa has been building software programs since 2015 and has been working in the software industry since 2018. He has experience in CMS, blogs, websites, and B2B multi-tenancy projects and is focused on creating high-quality, efficient, reliable, and maintainable applications.
            </p>
          </div>
        </div>
        <div id="education" className="py-52">
          <span className="text-gray-300 border-[1px] px-5 border-primary py-1 rounded-full text-sm flex items-center gap-2 w-fit">
            <FaGraduationCap />
            EDUCATION
          </span>
          <div className="py-5 px-2">
            <h3 className="font-normal text-4xl">
                Helwan <span className="text-green-400"> University </span>
            </h3>
            <p>
              <strong>
                Bachelor Degree
              </strong>
              <span> Computer Science</span>
            </p>
            <hr className="border-2 border-green-400 w-16 my-4" />
            <p className="text-secondary text-xl font-thin">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque velit id facilis culpa consectetur maiores explicabo exercitationem, illo deleniti ad tenetur porro reprehenderit veniam magni laboriosam? Fugiat nostrum vero numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab consequatur cupiditate numquam, tenetur excepturi expedita incidunt porro distinctio quo eos omnis consectetur cumque corrupti soluta ratione deleniti molestiae. Eveniet, commodi.
            </p>
            <div className="my-4 flex flex-wrap gap-4">
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                NextJs
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                Tailwind
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                AWS
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                Firebase
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                tRPC
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                Java
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                JavaFX
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                C
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                MATLAP
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                Python
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                AI
              </span>
              <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                ML
              </span>
            </div>
          </div>
        </div>
        <div id="experience" className="py-40">
          <span className="text-gray-300 border-[1px] px-5 border-primary py-1 rounded-full text-sm flex items-center gap-2 w-fit">
            <MdBusinessCenter />
            EXPERIENCE
          </span>
          <div className="mb-10 flex flex-col gap-10">
            <div className="py-5 px-2">
              <h3 className="font-normal text-4xl mb-2">
                  Software Engineer Intern  <span className="text-green-400">@ Microsoft </span>
              </h3>
              <div className="text-xl flex items-center gap-6">
                <span>
                  <strong className="text-green-400"> 2 months </strong> Jul 2022 – Sep 2022
                </span> 
                <span>
                  @ Zamalek - Egypt
                </span>
              </div>
              <hr className="border-2 border-green-400 w-16 my-4" />
              <p className="text-secondary text-xl font-thin">
                Developed a new debugging tool for the KED team that significantly improved their efficiency in debugging by summarizing days in just a few clicks. Focused on optimizing performance for handling large files and datasets.
              </p>
              <div className="my-4 flex flex-wrap gap-4">
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  ReactJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Tailwind
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Typescript
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Microsoft Azure
                </span>
              </div>
            </div>
            <div className="py-5 px-2">
              <h3 className="font-normal text-4xl mb-2">
                Software Engineer <span className="text-green-400"> @ Bld.ai </span>
              </h3>
              <div className="text-xl flex items-center gap-6">
                <span>
                  <strong className="text-green-400"> 4 months </strong> May 2022 - Sep 2022 
                </span> 
                <span>
                  @ Remote - USA
                </span>
              </div>
              <hr className="border-2 border-green-400 w-16 my-4" />
              <p className="text-secondary text-xl font-thin">
                I have acquired proficiency in the primary technology stacks utilized by the company, including React, React Native, and Django, through my involvement in various internal projects.
              </p>
              <div className="my-4 flex flex-wrap gap-4">
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  ReactJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  React Native
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  NextJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Tailwind
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Django
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  AWS
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Web3
                </span>
              </div>
            </div>
            <div className="py-5 px-2">
              <h3 className="font-normal text-4xl mb-2">
                Software Engineer <span className="text-green-400"> @ Soft Kinetics </span>
              </h3>
              <div className="text-xl flex items-center gap-6">
                <span>
                  <strong className="text-green-400"> 6 months </strong> Dec 2021 – May 2022
                </span> 
                <span>
                  @ Masr El gdida - Egypt
                </span>
              </div>
              <hr className="border-2 border-green-400 w-16 my-4" />
              <p className="text-secondary text-xl font-thin">
                Designed and developed an e-commerce website using NextJs The website features a shopping cart that supports multiple stores, themes, currencies, and languages. It also includes a rewards system, and advanced search and filtering functionalities.
              </p>
              <div className="my-4 flex flex-wrap gap-4">
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  ReactJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  NextJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Tailwind
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Laravel
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Wordpress
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Github Actions
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Jira
                </span>
              </div>
            </div>
            <div className="py-5 px-2">
              <h3 className="font-normal text-4xl mb-2">
                Freelancer <span className="text-green-400"> @ Self Employed </span>
              </h3>
              <div className="text-xl flex items-center gap-6">
                <span>
                  <strong className="text-green-400"> +30 clients </strong>Jul 2019 – Current
                </span> 
                <span>
                  @ Remote - Global
                </span>
              </div>
              <hr className="border-2 border-green-400 w-16 my-4" />
              <p className="text-secondary text-xl font-thin">
                Completed a diverse range of projects and tasks on Freelancer, consistently achieving a 5-star rating. Developed strong communication skills, enabling me to effectively extract and organize client requirements into detailed project plans with clear timelines and feature lists. I also have experience writing contracts with SRS (Software Requirements Specification) documentation.
              </p>
              <div className="my-4 flex flex-wrap gap-4">
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  ReactJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  React Native
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  NextJs
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Tailwind
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  MUI
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Laravel
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Wordpress
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  jQuery
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Github Actions
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  AWS
                </span>
                <span className="text-gray-300 border-[1px] px-2 py-1 rounded-lg text-xl border-gray-400">
                  Firebase
                </span>
              </div>
            </div>
          </div>
        </div>
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

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
