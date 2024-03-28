import Link from 'next/link'
import Image from 'next/image'
import Related01 from '@public/images/related-product-01.jpg'
import Related02 from '@public/images/related-product-01.jpg'
import Related03 from '@public/images/related-product-01.jpg'
import FaabsImage from '@/components/FaabsImage'

export default function CartItems({ carts }: { carts: any[] }) {
  return (
    <>
      <ul>
        {/* Cart item */}
        {carts.map(cart =>
          <li key={cart.id} className="sm:flex items-center py-6 border-b border-slate-200 dark:border-slate-700">
            <a className="block mb-4 sm:mb-0 mr-5 md:w-32 xl:w-auto shrink-0" href="#0">
              <FaabsImage src={'beans/' + cart.goods.img} width={200} height={142} />
            </a>
            <div className="grow">
              <a href="#0">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-1">The Complete Front-End Development Course!</h3>
              </a>
              <div className="text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</div>
              {/* Product meta */}
              <div className="flex flex-wrap justify-between items-center">
                {/* Rating and price */}
                <div className="flex flex-wrap items-center space-x-2 mr-2">
                  <div className="text-slate-400 dark:text-slate-600">·</div>
                  {/* Price */}
                  <div>
                    <div className="inline-flex text-sm font-medium text-emerald-600 text-center px-2 py-0.5">$89.00</div>
                  </div>
                </div>
                <button className="text-sm underline hover:no-underline">Remove</button>
              </div>
            </div>
          </li>
        )}
      </ul>

      <div className="mt-6">
        <Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" href="/ecommerce/shop">&lt;- Back To Shopping</Link>
      </div>
    </>
  )
}