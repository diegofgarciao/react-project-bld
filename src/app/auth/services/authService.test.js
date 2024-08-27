import authService from './authService';

describe('authService', () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test('login stores user in localStorage and returns true with correct credentials', async () => {
    const result = await authService.login('user', 'password');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    expect(result).toBe(true);
    expect(storedUser).toEqual({ username: 'user' });
  });

  test('login returns false with incorrect credentials', async () => {
    const result = await authService.login('wrongUser', 'wrongPassword');
    const storedUser = localStorage.getItem('user');
  
    expect(result).toBe(false);
    expect(storedUser).toBeNull();
  });

});
