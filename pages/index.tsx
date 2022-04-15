import type { NextPage } from 'next'
import Image from 'next/image';
import Navbar from '../components/Navbar';


const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden overflow-y-auto h-full w-full flex flex-col '>
      <h1 className='text-3xl font-bold ml-5' >Welcome To DailyUtils</h1>
    </div>
  )
}

export default Home
