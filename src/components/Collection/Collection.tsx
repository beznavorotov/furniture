import livingRoom from '@/assets/living-room-interior.jpg';
import modernRoom from '@/assets/modern-interior-room.jpg';
import modernYellow from '@/assets/modern-yellow.jpg';
import greySofa from '@/assets/grey-sofa-coffee.jpg';

export const Collection = () => {
  return (
    <div className="collection">
      <div className="desktop-grid">
        <div className="item-0 item">
          <img src={livingRoom} alt="Living Room" className="img" />
        </div>
        <div className="item-1 item">
          <img src={modernYellow} alt="Modern Yellow" className="img" />
        </div>
        <div className="item-2 item">
          <img src={greySofa} alt="Grey Sofa" className="img" />
        </div>
        <div className="item-3 item">
          <img src={modernRoom} alt="Modern Room" className="img" />
        </div>
      </div>


    </div>
  );
};
