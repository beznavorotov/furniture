import { Link } from 'react-router-dom';
import reset from '../../assets/authorize/reset_pass_bg.webp';
import { useState } from 'react';

export const Reset = () => {
  const [resetEmail, setResetEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Password reset done');
  };

  return (
    <div className="page-authorize container">
      <section className="reset">
        <div className="authorize__img-block">
          <img src={reset} alt="reset bg" />
        </div>

        <div className="authorize__functional-block">
          <div className="wrapper">
            <form
              className="form__authorize form__reset"
              method="post"
              id="formRegisterNewUser"
              onSubmit={handleSubmit}
            >
              <h2 className="form__authorize--heading">Скинути пароль</h2>
              <p className="form__authorize--text">
                Будь ласка, введіть електронну адресу свого облікового запису,
                на яку ви отримаєте електронний лист для зміни пароля.
              </p>
              <input
                type="email"
                name="email"
                id="resetEmail"
                placeholder="Електронна адреса"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                required
              />

              <button type="submit" className="btn">
                Скинути
              </button>
            </form>
          </div>

          <div className="new-user">
            <span>Ви тут новенький? </span>
            <Link to="/login">Створити аккаунт</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
