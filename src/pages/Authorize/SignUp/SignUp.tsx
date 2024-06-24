import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '@/store';
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
  // const authError = useSelector((state: RootState) => state.auth.error);
  const [userState, setUserState] = useState(initialState);
  // const [formErrors, setFormErrors] = useState({});
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
      errors.firstName = 'firstName is required!';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'lastName is required!';
    }

    if (!data.userEmail.trim()) {
      errors.userEmail = 'userEmail is required!';
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.userEmail)
    ) {
      errors.userEmail = 'Incorrect email';
    }

    if (!data.userPassword) {
      errors.userPassword = 'userPassword is required!';
    } else if (data.userPassword.length < 8) {
      errors.userPassword = 'Password must be at least 8 characters long';
    }

    if (data.userPasswordConfirm !== data.userPassword) {
      errors.userPasswordConfirm = 'Passwords do not match';
    }

    if (policyCheck === false) {
      errors.policyConfirmCheckbox = 'Policy must be checked';
    }

    return errors;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = validateForm(userState);
    // setFormErrors(newErrors);

    if (
      Object.values(newErrors).every((value) => value === '') &&
      policyCheck
    ) {
      dispatch(signup(credentials));
      setUserState(initialState);
      console.log(JSON.stringify(credentials));
      navigate('/login');
    } else {
      console.log('Form submit error', newErrors);
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
                  name="firstName"
                  id="firstNameInput"
                  placeholder="Ім’я"
                  value={userState.firstName}
                  onChange={updateState}
                />
              </span>
              <span className="input__required">
                <input
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
                  type="email"
                  name="userEmail"
                  id="loginEmail"
                  placeholder="Електронна адреса"
                  value={userState.userEmail}
                  onChange={updateState}
                />
              </span>

              <span className="input__required">
                <input
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
                  type="password"
                  name="userPasswordConfirm"
                  id="confirmPasswordInput"
                  placeholder="Підтвердити пароль"
                  value={userState.userPasswordConfirm}
                  onChange={updateState}
                />
              </span>
              <div className="policy-confirm">
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
