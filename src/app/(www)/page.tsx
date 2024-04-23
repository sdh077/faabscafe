import Full from '@/components/full/Full';
import { navItems } from './layout';
import Cursor from '@/components/cursor/Cursor';
import Ripple from '@/components/Ripple';

export default async function Home() {
  return (
    <div className='flex'>
      <div className='hidden md:block'><Cursor /></div>
      <div className='h-[100vh] w-[270px] bg-white'>
        <div className='md:w-[200px] text-center absolute text-black py-6 md:pt-100 z-[11] right-0 top-0 md:left-0 md:top-[170px]'>
          {navItems.map((item, i) =>
            <a className='text-black text-lg mb-30' href={item.link} key={item.name}>
              <div className='mb-6' data-aos="fade-right" data-aos-duration={500 * (i + 1)}  >
                <Ripple >
                  {item.name}
                </Ripple>
              </div>
            </a>
          )}
        </div>
      </div>
      <div className='w-full'>
        <Full />
      </div>
    </div>
  )
}
