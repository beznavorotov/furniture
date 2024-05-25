import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import singup from '../../assets/authorize/signup__bg.webp';

export const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
  const navigate = useNavigate();

  const serverSignUpUrl = 'https://furnishop-back.pp.ua/users/create-user/';

  const data = {
    first_name: userName,
    last_name: userSurname,
    email: userEmail,
    password: userPassword,
  };

  async function userRegistration() {
    try {
      const response = await fetch(serverSignUpUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      navigate('/profile');
      console.log(responseData);
    } catch (error) {
      console.error('----- Something goes wrong -----');
      console.error(error);
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    userRegistration();

    // clear state
    setUserName('');
    setUserSurname('');
    setUserEmail('');
    setUserPassword('');
    setUserPasswordConfirm('');
    console.log(JSON.stringify(data));
  };

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
              method="post"
              id="formRegisterNewUser"
              onSubmit={handleSubmit}
            >
              <h2 className="form__authorize--heading">Створити аккаунт</h2>
              <span className="input__required">
                <input
                  type="text"
                  name="name"
                  id="userNameInput"
                  placeholder="Ім’я"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </span>
              <span className="input__required">
                <input
                  type="text"
                  name="userSurname"
                  id="userSurnameInput"
                  placeholder="Прізвище"
                  value={userSurname}
                  onChange={(e) => setUserSurname(e.target.value)}
                  required
                />
              </span>
              <span className="input__required">
                <input
                  type="email"
                  name="email"
                  id="loginEmail"
                  placeholder="Електронна адреса"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </span>

              <span className="input__required">
                <input
                  type="password"
                  name="newPassword"
                  id="newPasswordInput"
                  placeholder="Пароль"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  required
                />
              </span>
              <span className="input__required">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPasswordInput"
                  placeholder="Підтвердити пароль"
                  value={userPasswordConfirm}
                  onChange={(e) => setUserPasswordConfirm(e.target.value)}
                />
              </span>
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
              <button type="submit" className="button">
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
