import { Bestsellers } from '../../components/Bestsellers/Bestsellers';
import { Collection } from '../../components/Collection/Collection';
import { Sale } from '../../components/Sale/Sale';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Slider } from '../../components/Slider/Slider';
import { Static } from '../../components/Static/Static';
import './home.scss';

export const Home = () => {
  return (
    <div className="container">
      <div className="grid_home">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
      <Static />
      <Bestsellers />
      <Collection />
      <Sale />
    </div>
  );
};
