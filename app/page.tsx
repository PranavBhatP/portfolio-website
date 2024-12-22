'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Kanit } from 'next/font/google';
import { FaReact, FaGitAlt, FaBootstrap, FaNodeJs, FaHtml5, FaCss3, FaPython, FaFlask, FaFileDownload, FaHardHat, FaEthereum} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { AiFillRedditCircle } from "react-icons/ai";
import { SiSolidity, SiVite, SiTypescript, SiTensorflow, SiScikitlearn, SiMongodb, SiExpress, SiCplusplus, SiPandas, SiNumpy, SiFlask, SiPrisma, SiMui, SiDocker, SiPytorch } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { CiMail, CiPhone } from "react-icons/ci";
import dynamic from 'next/dynamic';
import ProjectsCard from './components/ProjectsCard';
import DSACard from './components/DSACard';
import { PiDownloadSimple, PiDownloadSimpleThin } from 'react-icons/pi';
import BlogsCard from './components/BlogsCard';

const kanit = Kanit({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const NoSsrClock = dynamic(() => import('./components/TimeClock'), { ssr: false });

export default function Home() {
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <main className="flex lg:w-3/5 mx-auto flex-col items-center lg:my-36 w-5/6 my-20 lg:p-2 mx-auto gap-y-10 rounded-lg ">
      <section className="flex flex-col w-full">
        <h1 className={kanit.className} style={{ fontSize: '60px', color: "#D4D4D4" }}>Pranav Bhat P</h1>
        <div className="text-gray-500 text-sm" style={{ color: "#D4D4D4" }}>
          <span>20M, Student | Bangalore, Karnataka, India | </span><NoSsrClock />
        </div>
      </section>
      <section className="flex flex-col w-full gap-y-5">
        <p className="text-gray-500 text-sm" style={{ color: "#D4D4D4" }}>
          Hey There!<span className="text-xl">👋</span>. I&apos;m a 20-year-old student, currently pursuing my B.Tech in Information Technology @ <b>National Institute of Technology, Karnataka</b>.
        </p>
        <p className="text-gray-500 text-sm" style={{ color: "#D4D4D4" }}>
          Currently delving into AI/ML models, DSA and actively contributing to Open Source. On the side, I also dabble in Full Stack Development including technologies like the MERN Stack, TypeScript and NextJS. Apart from coding, I take deep interest in the happenings of the world and the latest in tech...
        </p>
      </section>
      <section className="flex flex-row w-full gap-x-5">
        <Link href="https://github.com/PranavBhatP" target="_blank">
          <FiGithub className="text-white text-lg" />
        </Link>
        <Link href="https://www.linkedin.com/in/pranav-bhat-966003195/" target="_blank">
          <FiLinkedin className="text-white text-lg" />
        </Link>
        <Link href="https://www.instagram.com/_pranav35_/" target="_blank">
          <FiInstagram className="text-white text-lg" />
        </Link>
        <Link href="https://www.reddit.com/user/DeshBhaktPB/" target="_blank">
          <AiFillRedditCircle className="text-white text-lg" />
        </Link>
      </section>
      <section className="flex flex-col w-full">
        <h3 className={kanit.className} style={{ fontSize: '24px', color: "#D4D4D4" }}>Technologies</h3>
        <div className="flex w-full flex-wrap gap-y-10 gap-x-10 pt-10">
          <div className="relative group">
            <FaReact className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            React
            </span>
          </div>
          <div className="relative group">
            <RiNextjsFill className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            NextJS
            </span>
          </div>
          <div className="relative group">
            <RiTailwindCssFill className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            TailwindCSSv3
            </span>
          </div>
          <div className="relative group">
            <SiVite className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Vite
            </span>
          </div>
          <div className="relative group">
            <IoLogoJavascript className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Javascript
            </span>
          </div>
          <div className="relative group">
            <SiTypescript className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            TypeScript
            </span>
          </div>
          <div className="relative group">
            <FaGitAlt className="text-white text-3xl hover:text-red-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Git
            </span>
          </div>
          <div className="relative group">
          <SiTensorflow className="text-white text-3xl hover:text-orange-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Tensorflow 2.0
            </span>
          </div>
          <div className="relative group">
          <SiPytorch className="text-white text-3xl hover:text-red-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            PyTorch
            </span>
          </div>
          <div className="relative group">
            <SiScikitlearn className="text-white text-3xl hover:text-orange-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sci-Kit Learn
            </span>
          </div>
          <div className="relative group">
            <FaBootstrap className="text-white text-3xl hover:text-blue-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Bootstrap
            </span>
          </div>
          <div className="relative group">
            <SiMongodb className="text-white text-3xl hover:text-green-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            MongoDB
            </span>
          </div>
          <div className="relative group">
            <SiExpress className="text-white text-3xl"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            ExpressJS
            </span>
          </div>
          <div className="relative group">
            <FaNodeJs className="text-white text-3xl hover:text-green-800"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            NodeJS
            </span>
          </div>
          <div className="relative group">
            <SiCplusplus className="text-white text-3xl hover:text-blue-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            C++
            </span>
          </div>
          <div className="relative group">
            <FaHtml5 className="text-white text-3xl hover:text-red-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            HTML5
            </span>
          </div>
          <div className="relative group">
            <FaCss3 className="text-white text-3xl hover:text-blue-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CSS3
            </span>
          </div>
          <div className="relative group">
            <SiPandas className="text-white text-3xl"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Pandas
            </span>
          </div>
          <div className="relative group">
            <SiNumpy className="text-white text-3xl"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Numpy
            </span>
          </div>
          <div className="relative group">
            <FaPython className="text-white text-3xl"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Python 3
            </span>
          </div>
          <div className="relative group">
            <SiFlask className="text-white text-3xl"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Flask
            </span>
          </div>
          <div className="relative group">
            <SiPrisma className="text-white text-3xl"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            PrismaDB
            </span>
          </div>
          <div className="relative group">
            <SiMui  className="text-white text-3xl hover:text-blue-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Material UI
            </span>
          </div>
          <div className="relative group">
            <SiDocker className="text-white text-3xl hover:text-cyan-400"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Docker
            </span>
          </div>
          <div className="relative group">
            <SiSolidity className="text-white text-3xl hover:text-gray-500"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Solidity
            </span>
          </div>
          <div className="relative group">
            <FaEthereum className="text-white text-3xl hover:text-blue-300"/>
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ethereum
            </span>
          </div>
          <p className="text-sm text-white pt-3 italic">and many more to come.. :)</p>
        </div>
      </section>
      <section className="flex flex-col w-full space-y-5">
        <h3 className={kanit.className} style={{ fontSize: '24px', color: "#D4D4D4" }}>Activity</h3>
        <div className="flex flex-row gap-4">
          <button 
            className={`w-36 px-4 py-2 transition-colors duration-500 ${activeTab === 'Projects' ? 'border-b border-white' : 'border-b border-gray-700'} text-white`}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </button>
          <button 
            className={`w-36 px-4 py-2 transition-colors duration-500 ${activeTab === 'DSA' ? 'border-b border-white' : 'border-b border-gray-700'} text-white`}
            onClick={() => setActiveTab('DSA')}
          >
            DSA
          </button>
          <button 
            className={`w-36 px-4 py-2 transition-colors duration-500 ${activeTab === 'Blogs' ? 'border-b border-white' : 'border-b border-gray-700'} text-white`}
            onClick={() => setActiveTab('Blogs')}
          >
            Blogs
          </button>
        </div>
        <div className="flex gap-6 flex-wrap w-full">
          {activeTab === 'Projects' && (
            <>
              <ProjectsCard/>
            </>
          )}
          {activeTab === 'DSA' && (
            <>
              <DSACard/>
            </>
          )}
          {activeTab === 'Blogs' && (
            <>
              <BlogsCard/>
            </>
          )}
        </div>
      </section>
      <section className="flex flex-col w-full space-y-6">
        <h3 className={kanit.className} style={{ fontSize: '24px', color: "#D4D4D4" }}>Contact Me</h3>
        <p className="text-gray-500 text-sm" style={{ color: "#D4D4D4" }}>
          I&apos;m always on the lookout for opportunities to grow in the field of computer science and open source. If you believe that I could make a worthwhile contribution to your project or organization, contact me at the mail below. Looking forward to hearing from you!
        </p>
        <div className="flex gap-x-2">
          <CiMail className="text-white text-xl" />
          <p style={{ color: "#D4D4D4" }} className="text-sm text-white"> - pranavbhat2004@gmail.com</p>
        </div>
        <div className="flex gap-x-2">
          <CiPhone className="text-white text-xl" />
          <p style={{ color: "#D4D4D4" }} className="text-sm text-white"> - +91 80733 04481</p>
        </div>
        <div className="flex gap-x-2">
          <PiDownloadSimple className="text-white text-xl hover:scale-110" />
          <a href = "https://drive.google.com/file/d/1FM0ecCidBpfoilCVcgmj4ul9eq6D8rod/view?usp=sharing" target = "_blank" style={{ color: "#D4D4D4" }} className="text-sm text-white hover:scale-110"> - Resume</a>
        </div>
      </section>
    </main>
  );
}
