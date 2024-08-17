import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '@/store/slices/userInfoSlice';
import { RootState } from '@/store';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userInfo.data);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    birth_date: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (userData.length === 0) {
      dispatch(getUserInfo());
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (userData) {
      setFormData({
        ...formData,
        firstName: userData.first_name || '',
        lastName: userData.last_name || '',
        phone: userData.phone || '',
        email: userData.email || '',
        birth_date: userData.birth_date || '1991-08-24',
      });
    }
    // eslint-disable-next-line
  }, [userData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        birth_date: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data: typeof formData) => {
    const errors: { [key: string]: string } = {};
    if (!data.firstName.trim()) {
      errors.firstName = "Ім'я є обов'язковим полем";
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Прізвище є обов'язковим полем";
    }
    if (!data.phone.trim()) {
      errors.phone = "Телефон є обов'язковим полем";
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = 'Неправильний формат email';
    }
    if (!data.birth_date) {
      errors.birthday = "Дата народження є обов'язковою";
    }
    if (!data.password) {
      errors.password = "Пароль є обов'язковим полем";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Паролі не співпадають';
    }
    return errors;
  };

  return (
    <div className='data'>
      <div className='data_header'>
        <span className='data_title'>Персональні дані</span>
      </div>
      <form className='form_data' onSubmit={handleSubmit}>
        <div className='mob'>
          <label htmlFor='firstName'>
            Ім'я
            <div className='input__required'>
              <input
                className='input'
                type='text'
                name='firstName'
                id='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Ім'я"
                required
              />
              {errors.firstName && (
                <span className='error'>{errors.firstName}</span>
              )}
            </div>
          </label>

          <label htmlFor='lastName'>
            Прізвище
            <div className='input__required'>
              <input
                className='input'
                type='text'
                name='lastName'
                id='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder='Прізвище'
                required
              />
              {errors.lastName && (
                <span className='error'>{errors.lastName}</span>
              )}
            </div>
          </label>
        </div>
        <div className='mob'>
          <label htmlFor='phone'>
            Телефон
            <div className='input__required'>
              <input
                className='input'
                type='tel'
                name='phone'
                id='phone'
                value={formData.phone}
                onChange={handleInputChange}
                placeholder='+380'
                required
              />
              {errors.phone && <span className='error'>{errors.phone}</span>}
            </div>
          </label>

          <label htmlFor='email'>
            Email
            <div className='input__required'>
              <input
                className='input'
                type='email'
                name='email'
                id='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Email'
                required
              />
              {errors.email && <span className='error'>{errors.email}</span>}
            </div>
          </label>
        </div>
        <div className='mob d-flex mt-3'>
          <label htmlFor='birthday'>
            Дата народження
            <div className='input__required'>
              <input
                type='date'
                name='birthday'
                id='birthdayDate'
                onChange={handleInputChange}
                min='1930-01-01'
                max='2024-12-31'
                value={formData.birth_date}
                required
              />
            </div>
            {errors.birthday && (
              <span className='error'>{errors.birthday}</span>
            )}
          </label>
        </div>

        <div className='data_header mt-3'>
          <span className='data_title'>Пароль</span>
        </div>

        <div className='mob'>
          <label htmlFor='password'>
            Новий пароль
            <div className='input__required'>
              <input
                className='input'
                type='password'
                name='password'
                id='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Новий пароль'
                required
              />
              {errors.password && (
                <span className='error'>{errors.password}</span>
              )}
            </div>
          </label>

          <label htmlFor='confirmPassword'>
            Підтвердити пароль
            <div className='input__required'>
              <input
                className='input'
                type='password'
                name='confirmPassword'
                id='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder='Підтвердити пароль'
                required
              />
              {errors.confirmPassword && (
                <span className='error'>{errors.confirmPassword}</span>
              )}
            </div>
          </label>
        </div>

        <div className='form-row mob_bt'>
          <button className='button button__white' type='button'>
            Відміна
          </button>
          <button className='button' type='submit'>
            Зберегти
          </button>
        </div>
      </form>
    </div>
  );
};
