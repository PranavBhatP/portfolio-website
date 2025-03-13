import React from 'react'
import { Kanit } from 'next/font/google'
const kanit = Kanit({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export default function Footer() {
  return (
    <footer className='flex lg:flex-row flex-col w-full p-5 lg:justify-between lg:text-sm text-xs justify-center items-center text-center'>
        <p className = {kanit.className} style = {{color: "gray"}}>Made with NextJS + TypeScript + Tailwind CSS </p>
        <p className = {kanit.className} style = {{color: "gray"}}><a href="https://github.com/PranavBhatP/portfolio-website" target="_blank">GitHub Repo<span>&#8599;</span></a></p>
        <p className = {kanit.className} style = {{color: "gray"}}>Last Updated - March 2025</p>
    </footer>
  )
}