import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const Home = () => {

  const addToCard = () => {}
  return (
    <div className='home'>
      <section></section>
      <h1>Latest Products
        <Link to={'/search'} className='findmore'>More</Link>
      </h1>

      <main>
        <ProductCard productId='1' productName='MacBook' productPrice={4545} productStock={435} handler={addToCard} productImage='https://images.unsplash.com/photo-1536627217140-899b0bc9d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D'/>
      </main>
    </div>
  )
}

export default Home