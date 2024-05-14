import { Bestsellers } from '../../components/Bestsellers/Bestsellers';
import { Collection } from '../../components/Collection/Collection';
import { Sale } from '../../components/Sale/Sale';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Slider } from '../../components/Slider/Slider';
import { Static } from '../../components/Static/Static';

export const Home = () => {
  return (
    <div className="container">
      <div className="grid_home">
        <Sidebar />
        <Slider />
      </div>
      <Static />
      <Bestsellers />
      <Collection />
      <Sale />
    </div>
  );
};
