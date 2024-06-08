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
      {advertisements.map((advert, index) => (
        // index - краще не використовувати як ключ, тут можна, але краще щось інше
        // ES6 - можна використовувати деструктуризацію
        <div key={index} className="col-12 col-md-3 static_bloc">
          <img src={advert.icon} alt={advert.title} />
          <h3>{advert.title}</h3>
          <span>{advert.description}</span>
        </div>
      ))}
    </div>
  );
};
