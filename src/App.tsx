import './index.css';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from './sections';

function App() {
  return (
    <main className='relative'>
      <h1>Nav</h1>
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
