import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className='overflow-x-hidden overflow-y-auto h-full w-full flex flex-col '>
      <h1 className='text-3xl font-bold ml-5' >Welcome To DailyUtils</h1>
      <div className='h-full  w-full grid place-items-center' >
        <div className='border pt-16 pb-16 pl-7 pr-7' >
          <span className='text-3xl font-bold text-primary ' >Daily</span>
          <span className='text-3xl font-bold' >Utils</span>
        </div>
      </div>
    </div>
  )
}

export default Home
