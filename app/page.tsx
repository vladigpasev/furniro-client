import { HeroSection } from './components/HeroSection';
import { CategorySection } from './components/CategorySection';
import { ProductList } from './components/ProductList';
import { InspirationSection } from './components/InspirationSection';
import { MosaicSection } from './components/MosaicSection';

export default function Home() {
  return (
    <>
     <HeroSection />
      <CategorySection />
      <ProductList />
      <InspirationSection />
      <MosaicSection />
    </>
  );
}
