import { Link } from 'react-router-dom';
import singup from '../../assets/authorize/signup__bg.webp';

export const SignUp = () => {
  return (
    <div className="page-authorize container">
      <section className="singup">
        <div className="authorize__img-block">
          <img src={singup} alt="singup bg" />
        </div>

        <div className="authorize__functional-block">
          <div className="wrapper">
            <form
              className="form__authorize form__singup"
              action=""
              method="post"
            >
              <h2 className="form__authorize--heading">Створити аккаунт</h2>

              <input
                type="text"
                name="userName"
                id="userNameInput"
                placeholder="Ім’я"
              />
              <input
                type="text"
                name="userSurname"
                id="userSurnameInput"
                placeholder="Прізвище"
              />
              <input
                type="email"
                name="email"
                id="loginEmail"
                placeholder="Електрона адреса"
              />
              <input
                type="password"
                name="newPassword"
                id="newPasswordInput"
                placeholder="Пароль"
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPasswordInput"
                placeholder="Підтвердити пароль"
              />
              <div className="policy-confirm">
                <input
                  type="checkbox"
                  name="policyConfirmCheckbox"
                  id="policyConfirmCheckbox"
                />
                <span>
                  Підтвердьте, що ви прочитали та прийміть його{' '}
                  <a className="/" href="/">
                    політика конфіденційності
                  </a>
                </span>
              </div>
              <button type="submit" className="btn">
                Зареєструватися
              </button>
            </form>
          </div>

          <div className="new-user">
            <span>Вже є аккаунт? </span>
            <Link to="/login">Авторизуватися</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
