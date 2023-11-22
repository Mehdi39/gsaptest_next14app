import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='h-screen bg-green-300'>
        <Link className='text-3xl text-red-400 font-bold' href="/">
          Hello
        </Link>
      </div>
      <div className='h-screen bg-green-300'>
        <Link className='text-3xl text-red-400 font-bold' href="/">
          Hello
        </Link>
      </div>
      <div className='h-screen bg-green-300'>
        <Link className='text-3xl text-red-400 font-bold' href="/">
          Hello
        </Link>
      </div>
    </>
  )
}
