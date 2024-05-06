import "./static.scss";
import delivery from "../../assets/delivery.svg";
import wallet from "../../assets/wallet.svg";
import mark from "../../assets/mark.svg";
import question from "../../assets/question.svg";

export const Static = () => {
  return (
    <div className="static">
      <div>
        <img src={delivery} alt="delivery" />
        <h3>Безкоштовна доставка</h3>
        <span>Від 2000 гривень</span>
      </div>
      <div>
        <img src={wallet} alt="wallet" />
        <h3>Зручна оплата</h3>
        <span>Часткова або повна оплата</span>
      </div>
      <div>
        <img src={mark} alt="mark" />
        <h3>Гарантія якості</h3>
        <span>14 днів на тест якості товару</span>
      </div>
      <div>
        <img src={question} alt="question" />
        <h3>Підтримка 24/7</h3>
        <span>Швидке вирішення питань</span>
      </div>
    </div>
  );
};
