import './collection.scss';
import livingRoom from '../../assets/living-room-interior.jpg'
import modernRoom from '../../assets/modern-interior-room.jpg'
import modernYelow from '../../assets/modern-yellow.jpg'
import greySofa from '../../assets/grey-sofa-coffee.jpg'


export const Collection = () => {
  return (
    <div>
      <div className="collection">
        <div className="item-0 item"><img src={livingRoom} alt="" className='img'/></div>
        <div className="item-1 item"><img src={modernYelow} alt="" className='img'/></div>
        <div className="item-2 item"><img src={greySofa} alt="" className='img'/></div>
        <div className="item-3 item"><img src={modernRoom} alt="" className='img'/></div>
      </div>
    </div>
  );
};
