import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
// import PlatformLaunch from '../../pages/Platform'

const inter = Inter({ subsets: ['latin'] })

const PlatformLaunch = dynamic(() => import("../../pages/Platform"));


export default function Home() {
  return (
    <main>
      <PlatformLaunch />
    </main>
  )
}


