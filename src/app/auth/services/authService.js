const authService = {
    login: async (username, password) => {
        if (username === 'user' && password === 'password') {
            localStorage.setItem('user', JSON.stringify({ username }));
            return true;
        }
        return false;
    },
    logout: () => {
        localStorage.removeItem('user');
    },
    isAuthenticated: () => {
        return !!localStorage.getItem('user');
    }
};

export default authService;
