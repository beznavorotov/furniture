import { Bestsellers } from '@/components/Bestsellers/Bestsellers';
import { Collection } from '@/components/Collection/Collection';
import { Sale } from '@/components/Sale/Sale';
import { Slider } from '@/components/Carousel/Carousel';
import { Static } from '@/components/Static/Static';
import { CatalogMenu } from '@/components/CatalogMenu/CatalogMenu';

export const Home = () => (
  <div className="container">
    <div className="grid_home">
      <CatalogMenu />
      <Slider />
    </div>
    <Static />
    <Bestsellers />
    <Collection />
    <Sale />
  </div>
);
