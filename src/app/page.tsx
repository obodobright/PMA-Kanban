import Image from 'next/image'
import { Inter } from 'next/font/google'

import Layout from '../../component/Layout'
import PlatformLaunch from '../../pages/Platform'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <PlatformLaunch />
    </main>
  )
}


