import React from 'react'

type Props = {}

export default function ProjectsCard({}: Props) {
  return (
    <>
        <section className="p-6 hover:duration-500 hover:scale-105 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style={{ color: "#D4D4D4" }}>
                <a href="https://github.com/PranavBhatP/HTFC07" target="_blank">CryptoniteAI <span>&#8599;</span></a>
            </h4>
            <p className="text-white text-sm">Hackathon winning AI tool for cyber-attack vector predictions.</p>
            <p className="text-white flex-col flex text-xs gap-y-1">Skills: Tailwind CSS, React, Sci-Kit Learn, Flask<br></br><span className ="bg-gray-500 w-3/4 text-gray-300 rounded-md px-1">Winner at HTF2.0&#127881;</span></p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://github.com/PranavBhatP/streaklit" target = "_blank">StreakLit<span>&#8599;</span></a></h4>
            <p className="text-white text-sm">Productivity app to boost your day, on the web!</p>
            <p className="text-white text-xs">Skills: NextJS, TypeScript, MongoDB, Prisma</p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="#" target = "_blank">Image Inpainting using GANs <span>&#8599;</span></a></h4>
            <p className="text-white text-sm">Used PatchGANs for inpainting of masked images.</p>
            <p className="text-white text-xs">Skills: Tensorflow, Sci-Kit Learn, JS, Flask</p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://mark-it-up.vercel.app/" target = "_blank">Mark-It-Up <span>&#8599;</span></a></h4>
            <p className="text-white text-sm">Optimised, Desktop-only markdown(.md) file editor. Beats existing solutions with better UI.</p>
            <p className="text-white text-xs">Skills: React, TypeScript, Tailwind CSS</p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://www.kaggle.com/code/rijulraman/impulse2024" target = "_blank">Brain Tumor Detection AI Model <span>&#8599;</span></a></h4>
            <p className="text-white text-sm">Utilised Convolutional Neural Networks to detect brain tumors with high accuracy.</p>
            <p className="text-white text-xs">Skills: Tensorflow, Sci-Kit Learn</p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://github.com/PranavBhatP/CourseLite/tree/master" target = "_blank">CourseLite <span>&#8599;</span></a></h4>
            <p className="text-white text-sm">University course management software built with the MERN Stack.</p>
            <p className="text-white text-xs">Skills: React, MongoDB, ExpressJS, NodeJS</p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://github.com/PranavBhatP/Mage.ai" target = "_blank">Mage.ai*<span>&#8599;</span></a></h4>
            <p className="text-white text-sm">2K~4K image enhancer using state-of-the-art ESRGANs</p>
            <p className="text-white text-xs">Skills: Next.js, TailwindCSS, PyTorch, FastAPI, GANs</p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://devfolio.co/projects/zkonnect-119f" target = "_blank">zKonnect<span>&#8599;</span></a></h4>
            <p className="text-white text-sm">Securing the future of ticketing, with zKProofs and zkSNARKs. </p>
            <p className="text-white text-xs flex flex-col gap-y-2">Skills: Next.js, TailwindCSS, Solidity, Hardhat, The Graph, CDP, Scaffold-ETH2, zkEVM, Circom, Snark.js<span className ="bg-gray-500 w-auto text-gray-300 rounded-md px-1">Winner at ETHIndia&apos;24&#127881;</span></p>
        </section>
        <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
            <h4 className="text-lg font-bold hover:underline" style= {{color: "#D4D4D4"}}><a href="https://github.com/PranavBhatP/sktime" target = "_blank">sktime<span>&#8599;</span></a></h4>
            <p className="text-white text-sm">Contributed 5k+ lines of open source code to <code>sktime</code> and <code>pytorch-forecasting</code>.</p>
            <p className="text-white text-xs flex flex-col gap-y-2">Skills: NumPy, Pandas, PyTorch, Time Series Forecasting</p>
        </section>
    </>
  )
}