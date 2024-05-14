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

  return (
    <>
      <div className="data">
        <div className="data_header">
          <span className="data_title">Персональні дані</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input_name">
            <div className="form-row row">
              <label htmlFor="firstName">Ім'я</label>
              <input
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
            </div>
            <div className="form-row row ">
              <label htmlFor="lastName">Прізвище</label>
              <input
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
            </div>
          </div>

          <div className="input_info">
            <div className="form-row row">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+380"
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="form-row row">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row ">
            <label htmlFor="birthday">Дата народження</label>
            <input
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
            <input
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
            <input
              type="number"
              name="year"
              id="year"
              value={formData.year}
              onChange={handleInputChange}
              placeholder="Рік"
              min="1900"
              max="2024"
              required
            />
            {errors.birthday && (
              <span className="error">{errors.birthday}</span>
            )}
          </div>

          <div className="data_header">
            <span className="data_title">Пароль</span>
          </div>

          <div className="form-row">
            <label htmlFor="password">Новий пароль</label>
            <input
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
            <label htmlFor="confirmPassword">Підтвердити пароль</label>
            <input
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
          </div>
          <div className="form-row">
            <button type="submit">Зберегти</button>
            <button type="button">Відміна</button>
          </div>
        </form>
      </div>
    </>
  );
};



