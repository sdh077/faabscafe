import Full from '@/components/full/Full';
import { navItems } from './layout';
import Cursor from '@/components/cursor/Cursor';
import Ripple from '@/components/Ripple';
import { FooterIcon } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default async function Home() {
  return (
    <div className='flex'>
      <div className='hidden md:block'><Cursor /></div>
      <div className='h-[100vh] w-full md:w-[270px] absolute md:relative bg-transparent md:bg-white'>
        <div className='md:w-[200px] text-center absolute text-white md:text-black py-6 md:pt-100 z-[12] right-[30px] top-0 md:left-0 md:top-[170px]'>
          {navItems.map((item, i) =>
            <a className='text-lg mb-30' href={item.link} key={item.name}>
              <div className='mb-6' data-aos="fade-right" data-aos-duration={500 * (i + 1)}  >
                <Ripple >
                  {item.name}
                </Ripple>
              </div>
            </a>
          )}
        </div>
        <div className="hidden mt-4 md:flex fixed space-x-6 sm:mt-0 justify-center px-8 bottom-8">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon href="#" icon={BsGithub} />
        </div>
      </div>
      <div className='w-full'>
        <Full />
      </div>
    </div>
  )
}
