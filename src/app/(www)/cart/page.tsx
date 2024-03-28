export const metadata = {
  title: 'Cart 2 - Mosaic',
  description: 'Page description',
}

import { supabase } from '@/lib/api'
import CartItems from './cart-items'
import { cookies } from 'next/headers'
import { Address } from '@/interface/user';

export const revalidate = 0;
const getCart = async () => {
  const uid = cookies().get('uid')?.value
  return await supabase.from('cart').select(
    `*, goods(*), cart_item(*)`
  )
    .eq('user_id', uid)
}

export default async function Cart({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}
) {
  const carts = await getCart()
  if (!carts.data) return <></>
  return (
    <div className="lg:relative lg:flex">

      {/* Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
        <div className="lg:max-w-[640px] lg:mx-auto">

          {/* Cart items */}
          <div className="mb-6 lg:mb-0">
            <header className="mb-2">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Shopping Cart (3)</h1>
            </header>
            <CartItems carts={carts.data} />
          </div>

        </div>
      </div>

    </div>
  )
}