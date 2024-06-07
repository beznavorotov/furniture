import { useState, useEffect } from 'react';
import { CartOrder } from './CartOrder/CartOrder';

export const FormOrder = () => {
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch regions
    const fetchRegions = async () => {
      try {
        const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiKey: '04e501840a9ae41b4928dd19683747f5',
            modelName: 'Address',
            calledMethod: 'getAreas',
            methodProperties: {},
          }),
        });
        const data = await response.json();
        setRegions(data.data);
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchRegions();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      // Fetch cities
      const fetchCities = async () => {
        try {
          const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              apiKey: '04e501840a9ae41b4928dd19683747f5',
              modelName: 'Address',
              calledMethod: 'getCities',
              methodProperties: { AreaRef: selectedRegion },
            }),
          });
          const data = await response.json();
          setCities(data.data);
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };

      fetchCities();
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedCity) {
      // Fetch departments
      const fetchDepartments = async () => {
        try {
          const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              apiKey: '04e501840a9ae41b4928dd19683747f5',
              modelName: 'Address',
              calledMethod: 'getWarehouses',
              methodProperties: { CityRef: selectedCity },
            }),
          });
          const data = await response.json();
          setDepartments(data.data);
        } catch (error) {
          console.error('Error fetching departments:', error);
        }
      };

      fetchDepartments();
    }
  }, [selectedCity]);

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setCities([]);
    setDepartments([]);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setDepartments([]);
  };

  const handleOrderSubmit = () => {
    console.log('Замовлення відправлено');
  };

  return (
    <div className="order_page">
      <div className="title">
        <h1>Замовлення</h1>
      </div>
      <div className="form_order">
        <div className="form_data">
          <div className="form_section">
            <div className="title_border">
              <span className="form_section_title">01 Контактні дані</span>
            </div>
            <div className="form_group">
              <input
                className="input"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ім'я"
                required
              />
              <input
                className="input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Прізвище"
                required
              />
            </div>
            <div className="form_group">
              <input
                className="input"
                type="tel"
                name="phone"
                id="phone"
                placeholder="+380"
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="form_section">
            <div className="title_border">
              <span className="form_section_title">02 Доставка</span>
            </div>

            <div className="form_group">
              <select
                className="input_np"
                value={selectedRegion}
                onChange={handleRegionChange}
              >
                <option value="" disabled selected>
                  Оберіть область
                </option>
                {regions.map((region) => (
                  <option key={region.Ref} value={region.Ref}>
                    {region.Description}
                  </option>
                ))}
              </select>
            </div>
            <div className="form_group">
              <select
                className="input_np"
                value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedRegion}
              >
                <option value="" disabled selected>
                  Оберіть місто
                </option>
                {cities.map((city) => (
                  <option key={city.Ref} value={city.Ref}>
                    {city.Description}
                  </option>
                ))}
              </select>
            </div>
            <div className="form_group">
              <select className="input_np" disabled={!selectedCity}>
                <option value="" disabled selected>
                  Оберіть відділення Нової Пошти
                </option>
                {departments.map((department, index) => (
                  <option key={index} value={department.Description}>
                    {department.Description}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form_section">
            <div className="title_border">
              <span className="form_section_title">03 Оплата</span>
            </div>

            <div className="form_group_payment">
              <label className="input_payment">
                <input type="radio" name="payment" value="gpay" required />{' '}
                Оплата картами Visa/Mastercard на сайті
              </label>
              <label className="input_payment">
                <input type="radio" name="payment" value="paypal" required />{' '}
                PayPal
              </label>
              <label className="input_payment">
                <input type="radio" name="payment" value="np" required /> Під
                час отримання на НП
              </label>
            </div>
          </div>
          <div className="form_section">
            <div className="form_group">
              <textarea
                className="input_comment"
                name="comment"
                placeholder="Ваш коментар"
                rows='4'
              ></textarea>
            </div>
            <div className="form_group row">
              <label>
                <input type="checkbox" name="terms" required /> Я приймаю умови
                обслуговування
              </label>
              <label>
                <input type="checkbox" name="noCall" /> Не передзвонюйте мені, я
                впевнений у замовленні.
              </label>
            </div>
          </div>
          <div className="form_section">
            <button
              type="submit"
              className="button"
              onClick={handleOrderSubmit}
            >
              Відправити замовлення
            </button>
          </div>
        </div>
        <CartOrder />
      </div>
    </div>
  );
};

export default FormOrder;
