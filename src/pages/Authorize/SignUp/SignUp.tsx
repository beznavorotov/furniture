import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { signup } from '@/store/slices/authSlice';
import singupImg from '@/assets/authorize/signup__bg.webp';

export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authError = useSelector((state: RootState) => state.auth.error);

  const credentials = {
    first_name: firstName,
    last_name: lastName,
    email: userEmail,
    password: userPassword,
  };

  const handleSubmit = (event: React.FormEvent) => {
    try {
      event.preventDefault();
      dispatch(signup(credentials));
      navigate('/profile');
      
      // clear state
      setFirstName('');
      setLastname('');
      setUserEmail('');
      setUserPassword('');
      setUserPasswordConfirm('');
      console.log(JSON.stringify(credentials));
    } catch (error) {
      console.error(authError);
    }
  };

  return (
    <div className="page-authorize container">
      <section className="singup">
        <div className="authorize__img-block">
          <img src={singupImg} alt="singup bg" />
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
                  id="firstNameInput"
                  placeholder="Ім’я"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </span>
              <span className="input__required">
                <input
                  type="text"
                  name="lastName"
                  id="lastNameInput"
                  placeholder="Прізвище"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
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
