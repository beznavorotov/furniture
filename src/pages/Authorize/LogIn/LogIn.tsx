import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { login, setAuth } from '@/store/slices/authSlice';
import loginImg from '@/assets/authorize/login__bg.webp';
import google from '@/assets/icons/google.svg';
import facebook from '@/assets/icons/facebook.svg';

export const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authStatus = useSelector((state: RootState) => state.auth.status);
  const authError = useSelector((state: RootState) => state.auth.error);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const credentials = { username, password };
      dispatch(login(credentials))
        .unwrap()
        .then(() => {
          dispatch(setAuth(true));
          // clear form state
          setUsername('');
          setPassword('');
        })
        .catch((error) => {
          console.error(error, 'in login process');
        });
    } catch (error) {
      console.error(error, 'in login process');
    }
  };

  useEffect(() => {
    if (isAuth) navigate('/profile');
  }, [isAuth, navigate]);

  return (
    <div className="page-authorize container">
      <section className="login">
        <div className="authorize__img-block">
          <img src={loginImg} alt="login bg" />
        </div>

        <div className="authorize__functional-block">
          <div className="wrapper">
            <form
              className="form__authorize form__login"
              method="post"
              onSubmit={handleSubmit}
            >
              <h2 className="form__authorize--heading">Авторизуватися</h2>
              <span className="input__required">
                <input
                  type="email"
                  name="email"
                  id="loginEmail"
                  placeholder="Електронна адреса"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </span>
              <span className="input__required">
                <input
                  type="password"
                  name="password"
                  id="loginPassword"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </span>
              <Link className="password__lost" to="/reset">
                Забули пароль?
              </Link>
              <button
                type="submit"
                className="button button__white"
                disabled={authStatus === 'loading'}
              >
                {authStatus === 'loading' ? 'Авторизуємось' : 'Авторизуватися'}
              </button>
              {authStatus === 'failed' && <p>Помилка: {authError}</p>}
            </form>
            <h2 className="form__authorize--heading t-small">або</h2>
            <a href="/" className="button button__social button__fb">
            <img src={facebook} alt="google" />
              Facebook
            </a>
            <a href="/" className="button button__social button__google">
              <img src={google} alt="google" />
              Google
            </a>
          </div>

          <div className="new-user">
            <span>Ви тут новенький? </span>
            <Link to="/signup">Створити аккаунт</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
