import { Link } from 'react-router-dom';
import singup from '../../assets/authorize/signup__bg.webp';
import { useState } from 'react';

export const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');

  const serverSignUpUrl = 'http://3.75.92.220:8000/users/create-user/';

  const data = { name: userName, email: userEmail, password: userPassword };

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
      console.log(responseData);
    } catch (error) {
      console.error('----- Something goes wrong -----');
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
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

              <input
                type="text"
                name="name"
                id="userNameInput"
                placeholder="Ім’я"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                type="text"
                name="userSurname"
                id="userSurnameInput"
                placeholder="Прізвище"
                value={userSurname}
                onChange={(e) => setUserSurname(e.target.value)}
              />
              <input
                type="email"
                name="email"
                id="loginEmail"
                placeholder="Електрона адреса"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="newPassword"
                id="newPasswordInput"
                placeholder="Пароль"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPasswordInput"
                placeholder="Підтвердити пароль"
                value={userPasswordConfirm}
                onChange={(e) => setUserPasswordConfirm(e.target.value)}
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
