const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Utility function to make API requests with the correct base URL
 * @param {string} endpoint - API endpoint path (e.g., '/api/users')
 * @param {Object} options - Fetch options
 * @returns {Promise} - Fetch promise
 */
export const fetchApi = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  console.log(`Making API request to: ${url}`);
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};

// Common API methods
export const api = {
  get: (endpoint) => fetchApi(endpoint),
  post: (endpoint, data) => fetchApi(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  put: (endpoint, data) => fetchApi(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (endpoint) => fetchApi(endpoint, {
    method: 'DELETE',
  }),
};
