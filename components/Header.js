import React from 'react'
import Image from 'next/image'
import LOGO from '../components/images/SOCIOPEDIA.png'
import AVATAR from '../components/images/me-about1.png'
import { SearchIcon, PlusCircleIcon, MenuIcon, PaperAirplaneIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto' >
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer' >
                <Image 
                src={LOGO}
                layout='fill'
                objectFit='contain'
                />
            </div>
            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer' >
            <Image 
                src='https://links.papareact.com/jjm'
                layout='fill'
                objectFit='contain'
                />
            </div>
            <div className='max-w-xs' >
                <div className='relative mt-1 p-3 rounded-md' >
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none' >
                        <SearchIcon className='h-5 w-5 text-gray-500' />
                    </div>
                    <input type='text' placeholder='Search' className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'/>
                </div>
            </div>
            <div className='flex items-center justify-end space-x-4' >
                <HomeIcon className='navBtn' />
                <MenuIcon className='h-6 md:hidden cursor-pointer' />
                <PaperAirplaneIcon className='navBtn' />
                <PlusCircleIcon className='navBtn' />
                <UserGroupIcon className='navBtn' />
                <HeartIcon className='navBtn' />
                <Image src={AVATAR} alt='profile pic' className='h-10 w-10 rounded-2xl cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Header