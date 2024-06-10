import { useState, useEffect } from 'react';

export const useNovaPoshtaApi = () => {
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiKey: process.env.REACT_APP_NOVAPOSHTA_API_KEY,
            modelName: 'Address',
            calledMethod: 'getAreas',
            methodProperties: {},
          }),
        });
        const data = await response.json();
        setRegions(data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchRegions();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      if (selectedRegion) {
        try {
          const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              apiKey: process.env.REACT_APP_NOVAPOSHTA_API_KEY,
              modelName: 'Address',
              calledMethod: 'getCities',
              methodProperties: { AreaRef: selectedRegion },
            }),
          });
          const data = await response.json();
          setCities(data.data);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchCities();
  }, [selectedRegion]);

  useEffect(() => {
    const fetchDepartments = async () => {
      if (selectedCity) {
        try {
          const response = await fetch('https://api.novaposhta.ua/v2.0/json/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              apiKey: process.env.REACT_APP_NOVAPOSHTA_API_KEY,
              modelName: 'Address',
              calledMethod: 'getWarehouses',
              methodProperties: { CityRef: selectedCity },
            }),
          });
          const data = await response.json();
          setDepartments(data.data);
        } catch (error) {
          setError(error);
        }
      }
    };

    fetchDepartments();
  }, [selectedCity]);

  return { regions, cities, departments, error, setSelectedRegion, setSelectedCity };
};