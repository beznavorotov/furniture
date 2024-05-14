import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import login from '../../assets/authorize/login__bg.webp';
import { useNavigate } from 'react-router-dom';

export const LogIn = () => {
  const serverLoginUrl = 'http://3.75.92.220:8000/users/get-token/';
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();

  const data = { username: userEmail, password: userPassword };

  // login test subject
  // id: 15
  // name: mr.Test
  // nameSecond: Testinson
  // email: mrtest@test.io
  // pass: someVerySmartHardPass

  // login test subject #2
  // id: 20
  // name: subject12
  // nameSecond: Smith
  // email: subject12@test.io
  // pass: subject123

  async function userLogin() {
    try {
      // send data to server
      const response = await fetch(serverLoginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      // save data from server to localStorage and cookies
      setAccessToken(responseData.access);
      localStorage.setItem('accessToken', responseData.access);
      Cookies.set('refreshToken', responseData.refresh, { httpOnly: true });
      console.log(accessToken);
      // redirect user to ...
      navigate('/profile');
    } catch (error) {
      console.error('----- Something goes wrong -----');
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    userLogin();

    // clear state
    setUserEmail('');
    setUserPassword('');
  };
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      navigate('/profile');
    }
  });

  return (
    <div className="page-authorize container">
      <section className="login">
        <div className="authorize__img-block">
          <img src={login} alt="login bg" />
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
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </span>
              <span className="input__required">
                <input
                  type="password"
                  name="password"
                  id="loginPassword"
                  placeholder="Пароль"
                  required
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </span>
              <Link className="password__lost" to="/reset">
                Забули пароль?
              </Link>
              <button type="submit" className="btn btn__white">
                Авторизуватися
              </button>
            </form>
            <h2 className="form__authorize--heading t-small">або</h2>
            <a href="/" className="btn btn__social btn__fb">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                  fill="#F5F9FF"
                />
              </svg>
              Facebook
            </a>
            <a href="/" className="btn btn__social btn__google">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 14C17.2072 15.0184 16.627 15.9308 15.8289 16.6279C15.0308 17.3249 14.0486 17.777 13 17.93C12.18 18.049 11.3445 18.001 10.5435 17.789C9.74251 17.577 8.99262 17.2054 8.33885 16.6964C7.68508 16.1874 7.14091 15.5515 6.73899 14.8269C6.33708 14.1024 6.08571 13.3041 5.99999 12.48C5.93359 11.6526 6.03956 10.8205 6.31121 10.0362C6.58286 9.25194 7.01428 8.53254 7.57819 7.92352C8.14211 7.31449 8.82624 6.82909 9.58735 6.498C10.3485 6.16691 11.17 5.99733 12 6C12.7777 6.00109 13.5482 6.15042 14.27 6.44C14.3837 6.49102 14.5123 6.49778 14.6307 6.45893C14.749 6.42009 14.8487 6.33845 14.91 6.23L16.35 3.58C16.381 3.51896 16.3996 3.4524 16.4048 3.38414C16.41 3.31588 16.4017 3.24727 16.3804 3.18223C16.359 3.11719 16.325 3.05702 16.2803 3.00515C16.2356 2.95329 16.1812 2.91075 16.12 2.88C14.5737 2.17991 12.8747 1.88494 11.1829 2.02286C9.49113 2.16079 7.86231 2.72708 6.44984 3.66839C5.03738 4.60969 3.88776 5.89504 3.10927 7.40338C2.33078 8.91171 1.94904 10.5934 1.99999 12.29C2.09854 14.8099 3.13437 17.2022 4.90457 18.9983C6.67477 20.7944 9.05179 21.8649 11.57 22C14.2079 22.117 16.785 21.1859 18.739 19.4099C20.693 17.6338 21.8653 15.1571 22 12.52V10.52C21.9974 10.3882 21.9439 10.2625 21.8507 10.1693C21.7575 10.0761 21.6318 10.0226 21.5 10.02H12.5C12.3674 10.02 12.2402 10.0727 12.1464 10.1664C12.0527 10.2602 12 10.3874 12 10.52V13.52C12 13.6526 12.0527 13.7798 12.1464 13.8735C12.2402 13.9673 12.3674 14.02 12.5 14.02H17.5"
                  fill="#F9FBFF"
                />
              </svg>
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
