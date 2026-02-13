const BASE_URL = 'https://www.theaudiodb.com/api/v1/json/2/';

export const apiCall = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error('בעיה בתקשורת עם השרת');
  }
  
  const data = await response.json(); 
  
  console.log('API Response Data:', data);
  return data;
};

export default apiCall;