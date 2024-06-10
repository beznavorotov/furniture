import banner1 from '@/assets/shares/1.jpg';
import banner2 from '@/assets/shares/2.jpg';
import banner3 from '@/assets/shares/3.jpg';
import banner4 from '@/assets/shares/4.jpg';

const sharesData = [
  {
    banner: banner1,
    title: 'Гарячий розпродаж меблів',
    description:
      "Ловіть вигідні умови в нашому гарячому розпродажі! Отримайте до 50% знижки на весь асортимент меблів - дивани, столи, крісла та багато іншого. Пропозиція діє обмежений час, тож не втрачайте можливості оновити свій інтер'єр за вигідною ціною!",
    date: '25.05.2024 - 26.06.2024',
  },
  {
    banner: banner2,
    title: '-50% на всі крісла',
    description:
      'Не пропустіть унікальну можливість придбати крісла зі знижкою 50%! Обмежена пропозиція - поспішайте, поки товари є в наявності!',
    date: '25.05.2024 - 26.06.2024',
  },
  {
    banner: banner3,
    title:
      'Святкуйте свій день народження з нами та отримайте спеціальну знижку!',
    description:
      'Зареєструйтеся в нашій програмі лояльності та вкажіть свою дату народження, щоб отримати спеціальну знижку у ваш день народження. Спеціальна пропозиція буде автоматично надіслана на вашу електронну пошту у відповідний день',
    date: '25.05.2024 - 26.06.2024',
  },
  {
    banner: banner4,
    title: 'Отримайте безкоштовну доставку за покупки на суму понад $500',
    description:
      'При покупці товарів на суму понад $500 ви отримуєте можливість скористатися безкоштовною доставкою. Додайте більше товарів до свого кошика і скористайтеся цією вигодою!',
    date: '25.05.2024 - 26.06.2024',
  },
];

export const Shares = () => {
  return (
    <div className="shares">
      {sharesData.map(({ banner, title, description, date }) => (
        <div key={crypto.randomUUID()} className="share">
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
          <div className="proposition">
            <div className="text">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="date">
              <p>{date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
