import Full from '@/components/full/Full';
import { navItems } from './layout';
import Cursor from '@/components/cursor/Cursor';
export default async function Home() {
  return (
    <div className='flex'>
      <Cursor />
      <div className='w-full'>
        <Full />
      </div>
      <div className='w-[270px] bg-black text-white px-12 py-40'>
        {navItems.map(item =>
          <div key={item.name} ><a className='text-white text-xl mb-10' href={item.link}>{item.name}</a></div>
        )}
      </div>
    </div>
  )
}
