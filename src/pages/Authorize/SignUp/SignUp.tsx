import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { signup } from '@/store/slices/authSlice';
import singupImg from '@/assets/authorize/signup__bg.webp';

export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    firstName: '',
    lastName: '',
    userEmail: '',
    userPassword: '',
    userPasswordConfirm: '',
  };
  const authError = useSelector((state: RootState) => state.auth.error);
  const authErrorStatus = useSelector((state: RootState) => state.auth.status);
  const [userState, setUserState] = useState(initialState);
  const [formErrors, setFormErrors] = useState({
    ...initialState,
    policyConfirmCheckbox: '',
  });
  const [policyCheck, setPolicyCheck] = useState(false);

  const credentials = {
    first_name: userState.firstName,
    last_name: userState.lastName,
    email: userState.userEmail,
    password: userState.userPassword,
  };

  const updateState = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const errors = {
      firstName: '',
      lastName: '',
      userEmail: '',
      userPassword: '',
      userPasswordConfirm: '',
      policyConfirmCheckbox: '',
    };

    if (!data.firstName.trim()) {
      errors.firstName = 'Ім’я не вказано!';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Прізвище не вказано!';
    }

    if (!data.userEmail.trim()) {
      errors.userEmail = 'Email не вказано!';
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.userEmail)
    ) {
      errors.userEmail = 'Некоректний Email';
    }

    if (!data.userPassword) {
      errors.userPassword = 'Пароль не вказано!';
    } else if (data.userPassword.length < 8) {
      errors.userPassword = 'Пароль повинен бути не менше 8 символів!';
    }

    if (data.userPasswordConfirm !== data.userPassword) {
      errors.userPasswordConfirm = 'Паролі не збігаються!';
    }

    if (policyCheck === false) {
      errors.policyConfirmCheckbox = 'Політика конфіденційності не відмічена!';
    }

    return errors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = validateForm(userState);
    setFormErrors(newErrors);

    if (
      Object.values(newErrors).every((value) => value === '') &&
      policyCheck
    ) {
      dispatch(signup(credentials));
      setPolicyCheck(false);
      setUserState(initialState);
      console.log(JSON.stringify(credentials));
      if (authErrorStatus === 'succeeded' && authError === null) {
        navigate('/login');
      }
    } else {
      console.error('Errors on submit: ', newErrors);
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
                  className={formErrors?.firstName === '' ? '' : 'error'}
                  type="text"
                  name="firstName"
                  id="firstNameInput"
                  placeholder="Ім’я"
                  value={userState.firstName}
                  onChange={updateState}
                />
              </span>
              <span className="input__required">
                <input
                  className={formErrors?.lastName === '' ? '' : 'error'}
                  type="text"
                  name="lastName"
                  id="lastNameInput"
                  placeholder="Прізвище"
                  value={userState.lastName}
                  onChange={updateState}
                />
              </span>
              <span className="input__required">
                <input
                  className={formErrors?.userEmail === '' ? '' : 'error'}
                  type="email"
                  name="userEmail"
                  id="loginEmail"
                  placeholder="Електронна пошта"
                  value={userState.userEmail}
                  onChange={updateState}
                />
              </span>

              <span className="input__required">
                <input
                  className={formErrors?.userPassword === '' ? '' : 'error'}
                  type="password"
                  name="userPassword"
                  id="newPasswordInput"
                  placeholder="Пароль"
                  value={userState.userPassword}
                  onChange={updateState}
                />
              </span>
              <span className="input__required">
                <input
                  className={
                    formErrors?.userPasswordConfirm === '' ? '' : 'error'
                  }
                  type="password"
                  name="userPasswordConfirm"
                  id="confirmPasswordInput"
                  placeholder="Підтвердити пароль"
                  value={userState.userPasswordConfirm}
                  onChange={updateState}
                />
              </span>
              <label
                className={`policy-confirm ${
                  formErrors?.policyConfirmCheckbox === '' ? '' : 'error'
                }`}
              >
                <input
                  type="checkbox"
                  name="policyConfirmCheckbox"
                  id="policyConfirmCheckbox"
                  checked={policyCheck}
                  onChange={() => setPolicyCheck(!policyCheck)}
                />
                <span>
                  Підтвердьте, що ви прочитали та прийміть його{' '}
                  <a className="#" href="/">
                    політика конфіденційності
                  </a>
                </span>
              </label>
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
