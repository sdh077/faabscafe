export const metadata = {
  title: 'Cart 2 - Mosaic',
  description: 'Page description',
}

import { supabase } from '@/lib/api'
import CartItems from './cart-items'
import { cookies } from 'next/headers'
import { Address } from '@/interface/user';
import { Container } from '@/components/Container';

export const revalidate = 0;
const getCart = async () => {
  const uid = cookies().get('uid')?.value
  return await supabase.from('cart').select(
    `*, goods(*), cart_item(*, goods_option_item(*))`
  )
    .eq('user_id', uid)
    .eq('is_bought', false)
}

export default async function Cart({
  params,
  searchParams,
}: {
  params: { id: string }
  searchParams: { [key: string]: string | undefined }
}
) {
  const { data } = await getCart()
  if (!data) return <></>
  return (
    <div className="lg:relative lg:flex">

      {/* Content */}
      <Container>

        {/* Cart items */}
        <div className="mb-6 lg:mb-0">

          <CartItems carts={data} />
        </div>

      </Container >
    </div >
  )
}