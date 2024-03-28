import CardComponent from '@/components/Card'
import { Container } from '@/components/Container'
import Slide from '@/components/Slide'
import GoodsCategory from '@/interface/goods-category';
import { supabase } from '@/lib/api';
export const revalidate = 0 // revalidate the data at most every hour
const getMainImage = async () => {
  const { data, error } = await supabase
    .storage
    .from('faabs')
    .list('main', {
      limit: 100,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
    })
  return data
}
export default async function Home() {
  const { data, error } = await supabase.from('goods_category').select(
    `*,
    goods(
      *
    )
    `
  )
    .eq('use_main', true)
    .order('id', { ascending: true }).returns<GoodsCategory[]>();
  const images = await getMainImage()
  return (
    <main>
      {images && <Slide images={images} />}
      <Container className='mt-20 '>
        {data?.map(category =>
          <div key={category.id} className='my-10'>
            <h4 className='mb-10'>{category.title}</h4>
            <div className='grid grid-cols-2 lg:grid-cols-4 '>
              {category.goods?.map(goods =>
                <CardComponent key={goods.id} id={goods.id} img={goods.img} title={goods.name} content={goods.flavor} link={`/shop/${goods.id}`} flavor={goods.flavor} />
              )}
            </div>
          </div>)}
      </Container>
    </main>
  )
}
