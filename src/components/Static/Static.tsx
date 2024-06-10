import delivery from '../../assets/delivery.svg';
import wallet from '../../assets/wallet.svg';
import mark from '../../assets/mark.svg';
import question from '../../assets/question.svg';

const advertisements = [
  {
    icon: delivery,
    title: 'Безкоштовна доставка',
    description: 'Від 2000 гривень',
  },
  {
    icon: wallet,
    title: 'Зручна оплата',
    description: 'Часткова або повна оплата',
  },
  {
    icon: mark,
    title: 'Гарантія якості',
    description: '14 днів на тест якості товару',
  },
  {
    icon: question,
    title: 'Підтримка 24/7',
    description: 'Швидке вирішення питань',
  },
];

export const Static = () => {
  return (
    <div className="static row">
      {advertisements.map(({ icon, title, description }) => (
        <div key={crypto.randomUUID()} className="col-12 col-md-3 static_bloc">
          <img src={icon} alt={title} />
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
      ))}
    </div>
  );
};
