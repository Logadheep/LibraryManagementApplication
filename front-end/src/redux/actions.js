export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const mockLogin = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        resolve({ username: 'admin', role: 'admin' });
      } else if (username === 'user' && password === 'password') {
        resolve({ username: 'user', role: 'user' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });

// Action creator for login
export const loginAction = (formData) => async (dispatch) => {
  try {
    const { username, password } = formData;
    const user = await mockLogin(username, password);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    console.error(error);
  }
};

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

// Mock API for registration (Replace this with real API calls)
const mockRegister = (username, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate successful registration
      resolve({ username });
    }, 1000);
  });

// Action creator for user registration
export const registerAction = (formData) => async (dispatch) => {
  try {
    const { username, password, confirmPassword } = formData;

    // Add validation for password and confirmPassword
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match');
    }

    // Call the registration API
    const user = await mockRegister(username, password);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    console.error(error);
  }
};