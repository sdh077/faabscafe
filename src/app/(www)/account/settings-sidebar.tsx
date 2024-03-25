'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SettingsSidebar() {
  const pathname = usePathname()
  const sidebarOrder = [
    {
      link: 'orders',
      title: '주문목록 / 배송목록'
    }, {
      link: 'cancel-return',
      title: '취소/반품/환불내역'
    }, {
      link: 'shipping',
      title: '배송지 관리'
    },
    // {
    //   link: 'review',
    //   title: '리뷰관리'
    // }
  ]
  const sidebarAccount = [
    {
      link: 'setting',
      title: '개인정보 확인 / 수정'
    }, {
      link: 'inquiry',
      title: '문의하기'
    }
  ]
  return (
    <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 min-w-[15rem] md:space-y-3">
      {/* Group 1 */}
      <div>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-3">주문 관리</div>
        <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
          {sidebarOrder.map(item =>
            <li key={item.link} className="mr-0.5 md:mr-0 md:mb-0.5">
              <Link href={`/account/${item.link}`} className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap ${pathname.includes(`/account/${item.link}`) && 'bg-indigo-50 dark:bg-indigo-500/30'}`}>
                <span className={`text-sm font-medium ${pathname.includes(`/account/${item.link}`) ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200'}`}>{item.title}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
      {/* Group 2 */}
      <div>
        <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-3">개인정보 관리</div>
        <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
          {sidebarAccount.map(item =>
            <li key={item.link} className="mr-0.5 md:mr-0 md:mb-0.5">
              <Link href={`/account/${item.link}`} className={`flex items-center px-2.5 py-2 rounded whitespace-nowrap ${pathname.includes(`/account/${item.link}`) && 'bg-indigo-50 dark:bg-indigo-500/30'}`}>
                <span className={`text-sm font-medium ${pathname.includes(`/account/${item.link}`) ? 'text-indigo-500 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200'}`}>{item.title}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}