import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main';
import { useScroll } from "react-use";

const poppins = "'Poppins', sans-serif";

export default function Home() {
  return (
    <div>
      <Main />
    </div>
  )
}
