import { useNovaPoshtaApi } from '@/components/UseNovaPoshtaApi/UseNovaPoshtaApi';
import { useForm } from 'react-hook-form';
import { CartOrder } from './CartOrder/CartOrder';

export const FormOrder = () => {
  const { regions, cities, departments, setSelectedRegion, setSelectedCity } =
    useNovaPoshtaApi();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const orderData = {
      ...data,
      region:
        regions.find((r) => r.Ref === data.selectedRegion)?.Description || '',
      city: cities.find((c) => c.Ref === data.selectedCity)?.Description || '',
      department:
        departments.find((d) => d.Description === data.selectedDepartment)
          ?.Description || '',
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
      reset();
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleRegionChange = (e) => {
    const regionRef = e.target.value;
    setSelectedRegion(regionRef);
    setSelectedCity(null);
  };

  const handleCityChange = (e) => {
    const cityRef = e.target.value;
    setSelectedCity(cityRef);
  };

  return (
    <>
      <div className="title">
        <h1 className="title_ordet_text">Замовлення</h1>
      </div>
      <div className="order_page d-flex">
        <div className="form_order">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register('firstName', {
                    required: 'Це поле є обов`язковим',
                  })}
                />
                {errors.firstName && (
                  <span>{errors.firstName.message as string}</span>
                )}

                <input
                  className="input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Прізвище"
                  {...register('lastName', {
                    required: 'Це поле є обов`язковим',
                  })}
                />
                {errors.lastName && (
                  <span>{errors.lastName.message as string}</span>
                )}
              </div>
              <div className="form_group">
                <input
                  className="input"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+380"
                  {...register('phone', {
                    required: 'Це поле є обов`язковим',
                    pattern: {
                      value: /^\+380\d{9}$/,
                      message: 'Введіть правильний номер телефону',
                    },
                  })}
                />
                {errors.phone && <span>{errors.phone.message as string}</span>}

                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', {
                    required: "Це поле є обов'язковим",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Введіть правильний email',
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message as string}</span>}
              </div>
            </div>

            <div className="form_section">
              <div className="title_border">
                <span className="form_section_title">02 Доставка</span>
              </div>
              <div className="form_group justify-content-center flex-wrap ">
                <select
                  className="input_np "
                  name="selectedRegion"
                  {...register('selectedRegion', {
                    required: 'Оберіть регіон',
                  })}
                  onChange={handleRegionChange}
                >
                  <option value="">Оберіть регіон</option>
                  {regions.map((region) => (
                    <option key={region.Ref} value={region.Ref}>
                      {region.Description}
                    </option>
                  ))}
                </select>
                {errors.selectedRegion && (
                  <span>{errors.selectedRegion.message as string}</span>
                )}

                <select
                  className="input_np"
                  name="selectedCity"
                  {...register('selectedCity', { required: 'Оберіть місто' })}
                  onChange={handleCityChange}
                >
                  <option value="">Оберіть місто</option>
                  {cities.map((city) => (
                    <option key={city.Ref} value={city.Ref}>
                      {city.Description}
                    </option>
                  ))}
                </select>
                {errors.selectedCity && (
                  <span>{errors.selectedCity.message as string}</span>
                )}

                <select
                  className="input_np"
                  name="selectedDepartment"
                  {...register('selectedDepartment', {
                    required: 'Оберіть відділення',
                  })}
                >
                  <option value="">Оберіть відділення</option>
                  {departments.map((department) => (
                    <option
                      key={department.Description}
                      value={department.Description}
                    >
                      {department.Description}
                    </option>
                  ))}
                </select>
                {errors.selectedDepartment && (
                  <span>{errors.selectedDepartment.message as string}</span>
                )}
              </div>
            </div>

            <div className="form_section">
              <div className="title_border">
                <span className="form_section_title">03 Оплата</span>
              </div>
              <div className="form_group_payment">
                <label className="input_payment d-flex">
                  <input
                    className="input_ok"
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    {...register('paymentMethod', {
                      required: 'Оберіть метод оплати',
                    })}
                  />
                 <span className="ps-1 ">Оплата картами Visa/Mastercard на сайті</span> 
                </label>
                {errors.paymentMethod && (
                  <span>{errors.paymentMethod.message as string}</span>
                )}
                <label className="input_payment d-flex">
                  <input
                    className="input_ok"
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    {...register('paymentMethod', {
                      required: 'Оберіть метод оплати',
                    })}
                  />
                 <span className="ps-1 ">PayPal</span> 
                </label>
                {errors.paymentMethod && (
                  <span>{errors.paymentMethod.message as string}</span>
                )}
                <label className="input_payment d-flex">
                  <input
                    className="input_ok"
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    {...register('paymentMethod', {
                      required: 'Оберіть метод оплати',
                    })}
                  />
                  <span className="ps-1 ">Оплата під час отримання</span>
                </label>
                {errors.paymentMethod && (
                  <span>{errors.paymentMethod.message as string}</span>
                )}
              </div>
            </div>

            <div className="form_section">
              <div className="form_group">
                <textarea
                  className="input_comment"
                  name="comment"
                  placeholder="Коментар"
                  {...register('comment')}
                />
              </div>
              <div className="form_group_payment">
                <label className="input_payment d-flex">
                  <input
                    className="input_ok"
                    type="checkbox"
                    name="termsAccepted"
                    {...register('termsAccepted', {
                      required: 'Погодьтесь з умовами',
                    })}
                  />
                  <span className="ps-1 ">Я приймаю умови обслуговування</span>
                </label>
                {errors.termsAccepted && (
                  <span>{errors.termsAccepted.message as string}</span>
                )}

                <label className="input_payment d-flex">
                  <input
                    className="input_ok"
                    type="checkbox"
                    name="noCall"
                    {...register('noCall')}
                  />
                  <span className="ps-1 ">
                    Не передзвонюйте мені, я впевнений у замовленні.
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" className="button button__order">
              Відправити замовлення
            </button>
          </form>
        </div>
        <div className="basket">
          <CartOrder />
        </div>
      </div>
    </>
  );
};
