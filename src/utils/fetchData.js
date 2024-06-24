const fetchData = async (url, options = {}) => {
  const { method = 'GET', body = null, headers = {} } = options;

  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      // post
      // 'Authorization': 'Bearer ' + token,
      ...headers,
    },
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorText}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error: ', error);
    throw error;
  }
};

export default fetchData;
