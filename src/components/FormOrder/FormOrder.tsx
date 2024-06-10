import { useState, useEffect } from 'react';
import { CartOrder } from './CartOrder/CartOrder';

export const FormOrder = () => {
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [comment, setComment] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [noCall, setNoCall] = useState(false);

  useEffect(() => {
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
    setSelectedCity('');
    setSelectedDepartment('');
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setDepartments([]);
    setSelectedDepartment('');
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      firstName,
      lastName,
      phone,
      email,
      region: regions.find((r) => r.Ref === selectedRegion)?.Description || '',
      city: cities.find((c) => c.Ref === selectedCity)?.Description || '',
      department: departments.find((d) => d.Description === selectedDepartment)?.Description || '',
      paymentMethod,
      comment,
      termsAccepted,
      noCall,
    };

    try {
      const response = await fetch('https://furnishop-back.pp.ua/orders/all/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log('Order submitted successfully:', responseData);
      resetForm();
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setSelectedRegion('');
    setSelectedCity('');
    setSelectedDepartment('');
    setPaymentMethod('');
    setComment('');
    setTermsAccepted(false);
    setNoCall(false);
    setCities([]);
    setDepartments([]);
  };

  return (
    <div className="order_page">
      <div className="title">
        <h1>Замовлення</h1>
      </div>
      <div className="form_order">
        <form onSubmit={handleOrderSubmit}>
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Прізвище"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  <option value="" disabled>
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
                  <option value="" disabled>
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
                <select
                  className="input_np"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                  disabled={!selectedCity}
                >
                  <option value="" disabled>
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
                  <input
                    type="radio"
                    name="payment"
                    value="gpay"
                    checked={paymentMethod === 'gpay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />{' '}
                  Оплата картами Visa/Mastercard на сайті
                </label>
                <label className="input_payment">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />{' '}
                  PayPal
                </label>
                <label className="input_payment">
                  <input
                    type="radio"
                    name="payment"
                    value="np"
                    checked={paymentMethod === 'np'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />{' '}
                  Під час отримання на НП
                </label>
              </div>
            </div>
            <div className="form_section">
              <div className="form_group">
                <textarea
                  className="input_comment"
                  name="comment"
                  placeholder="Ваш коментар"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="form_group row">
                <label>
                  <input
                    type="checkbox"
                    name="terms"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />{' '}
                  Я приймаю умови обслуговування
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="noCall"
                    checked={noCall}
                    onChange={(e) => setNoCall(e.target.checked)}
                  />{' '}
                  Не передзвонюйте мені, я впевнений у замовленні.
                </label>
              </div>
            </div>
            <div className="form_section">
              <button type="submit" className="button">
                Відправити замовлення
              </button>
            </div>
          </div>
        </form>
        <div className='basket'>
        <CartOrder />
        </div>

      </div>
    </div>
  );
};

export default FormOrder;
