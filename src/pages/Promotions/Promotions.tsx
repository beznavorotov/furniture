import { Shares } from '../../components/Shares/Shares';

export const Promotions = () => {
  return (
    <div className="container">
      <h1>Акції</h1>
      <Shares />
    </div>
  );
};
//Shares - використовується в одному місці і не використовується в інших місцях, тому його можна включити в цей файл
