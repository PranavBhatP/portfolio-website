import React from 'react'
import { Kanit } from 'next/font/google'
const kanit = Kanit({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

export default function Footer() {
  return (
    <footer className='flex lg:flex-row flex-col w-full p-5 lg:justify-between justify-center items-center'>
        <p className = {kanit.className} style = {{color: "gray"}}>Made with NextJS + TypeScript + Tailwind CSS </p>
        <p className = {kanit.className} style = {{color: "gray"}}>GitHub Repo</p>
        <p className = {kanit.className} style = {{color: "gray"}}>Pranav Bhat P - 2024</p>
    </footer>
  )
}