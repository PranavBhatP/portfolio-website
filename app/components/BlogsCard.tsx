import React, { useState } from 'react'
import Image from 'next/image';
import { Kanit } from 'next/font/google'

const kanit = Kanit({
    weight: '500',
    subsets: ['latin'],
    display: 'swap',
});
export default function BlogsCard() {
  return (
    <>
      <section className="p-6 hover:duration-500 hover:scale-105 w-full flex flex-col md:flex-row items-center border rounded-lg border-gray-500">
        {/* Profile Picture */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-300 relative">
          <Image
            src="/portfolio-website/profile.png"
            alt="Profile"
            fill={true}
            className="object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h4
            className="text-lg font-bold hover:underline"
            style={{ color: "#D4D4D4" }}
          >
            <a
              href="https://medium.com/@pranavbhat2004/image-enhancer-website-generate-stunning-images-with-esrgans-4177c623df27"
              target="_blank"
            >
              Generate stunning images with GANs - An intro to ESRGANs{" "}
              <span>&#8599;</span>
            </a>
          </h4>
          <p className="text-white text-sm">Oct 23, 2024</p>
          <div className="pt-4 gap-y-1 flex flex-col">
            <p className="text-white text-sm">
              A blog documenting my hands-on experience with ESRGANs
            </p>
            <p className="text-white flex-col flex text-xs gap-y-1">
              Topics: DL, GAN, Image Processing
            </p>
          </div>
        </div>
      </section>
      <section className="p-6 hover:duration-500 hover:scale-105 w-full flex flex-col md:flex-row items-center border rounded-lg border-gray-500">
        {/* Profile Picture */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-300 relative">
          <Image
            src="/portfolio-website/multimodal_ml.png"
            alt="Profile"
            fill={true}
            className="object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h4
            className="text-lg font-bold hover:underline"
            style={{ color: "#D4D4D4" }}
          >
            <a
              href="https://webclub.nitk.ac.in/blogs/18"
              target="_blank"
            >
              MultiModal Magic: Integrating Diverse Data for Smarter AI systems
              <span>&#8599;</span>
            </a>
          </h4>
          <p className="text-white text-sm">Oct 23, 2024</p>
          <div className="pt-4 gap-y-1 flex flex-col">
            <p className="text-white text-sm">
              A simple blog about the emerging field of Multimodal ML, demonstrating a hands on project.
            </p>
            <p className="text-white flex-col flex text-xs gap-y-1">
              Topics: ML, DL, PyTorch, BERT, ResNET50
            </p>
          </div>
        </div>
      </section>
      <section className="p-6 hover:duration-500 hover:scale-105 w-full flex flex-col md:flex-row items-center border rounded-lg border-gray-500">
        {/* Profile Picture */}
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gray-300 relative">
          <Image
            src="/portfolio-website/profile.png"
            alt="Profile"
            fill={true}
            className="object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h4
            className="text-lg font-bold hover:underline"
            style={{ color: "#D4D4D4" }}
          >
            <a
              href="https://medium.com/@pranavbhat2004/the-future-of-digital-event-management-with-zkproofs-and-zksnarks-an-insight-into-the-on-chain-ea127db5fa20"
              target="_blank"
            >
              Documenting my ETHIndia&apos;24 Prize Winning Project{" "}
              <span>&#8599;</span>
            </a>
          </h4>
          <p className="text-white text-sm">Oct 23, 2024</p>
          <div className="pt-4 gap-y-1 flex flex-col">
            <p className="text-white text-sm">
              This blog documents the thought-process of my hackathon team and the overall implementation of a Web3 hackathon project.
            </p>
            <p className="text-white flex-col flex text-xs gap-y-1">
              Topics: Hackathons, Web3, Cryptography, zkProofs
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
