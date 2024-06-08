import React, { useState } from 'react';

export const MyData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    day: '',
    month: '',
    year: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
        day: '',
        month: '',
        year: '',
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
    if (!data.day || !data.month || !data.year) {
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

  //

  return (
    <>
      <div className="data">
        <div className="data_header">
          <span className="data_title">Персональні дані</span>
        </div>
        <form className="form_data" onSubmit={handleSubmit}>
          <div className="mob">
            <div className="form-row ">
              <div className="row mb-1">
                <label htmlFor="firstName">Ім'я</label>
              </div>
              <span className="input__required">
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Ім'я"
                  required
                />
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </span>
            </div>
            <div className="form-row  ">
              <div className="row mb-1">
                <label htmlFor="lastName">Прізвище</label>
              </div>
              <span className="input__required">
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Прізвище"
                  required
                />
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </span>
            </div>
          </div>
          <div className="mob">
            <div className="form-row">
              <div className="row mb-1">
                <label htmlFor="phone">Телефон</label>
              </div>
              <span className="input__required">
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+380"
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </span>
            </div>
            <div className="form-row">
              <div className="row mb-1">
                <label htmlFor="email">Email</label>
              </div>
              <span className="input__required">
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </span>
            </div>
          </div>
          <div className="d-flex mt-3">
            <div className="form-row  ">
              <div className="row mb-1">
                <label htmlFor="birthday">Дата народження</label>
              </div>
              <span className="input__required">
                <input
                  className="input_bd"
                  type="number"
                  name="day"
                  id="day"
                  value={formData.day}
                  onChange={handleInputChange}
                  placeholder="День"
                  min="1"
                  max="31"
                  required
                />
              </span>
              <span className="input__required">
                <input
                  className="input_bd"
                  type="number"
                  name="month"
                  id="month"
                  value={formData.month}
                  onChange={handleInputChange}
                  placeholder="Місяць"
                  min="1"
                  max="12"
                  required
                />
              </span>
              <span className="input__required">
                <input
                  className="input_bd"
                  type="number"
                  name="year"
                  id="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Рік"
                  min="1940"
                  max="2024"
                  required
                />
              </span>
              {errors.birthday && (
                <span className="error">{errors.birthday}</span>
              )}
            </div>
          </div>
          <div className="data_header mt-3">
            <span className="data_title">Пароль</span>
          </div>


            <div className="mob">
              <div className="form-row">
                <div className="row mb-1">
                  <label htmlFor="password">Новий пароль</label>
                </div>
                <span className="input__required">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Новий пароль"
                    required
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </span>
              </div>
              <div className="form-row">
                <div className="row mb-1">
                  <label htmlFor="confirmPassword">Підтвердити пароль</label>
                </div>

                <span className="input__required">
                  <input
                    className="input"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Підтвердити пароль"
                    required
                  />
                  {errors.confirmPassword && (
                    <span className="error">{errors.confirmPassword}</span>
                  )}
                </span>
              </div>
            </div>


          <div className="form-row mob_bt">
            <button className="button" type="button">
              Відміна
            </button>
            <button className="button button__white" type="submit">
              Зберегти
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
