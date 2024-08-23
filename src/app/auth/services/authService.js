const authService = {
    login: async (username, password) => {
        // Simulación de autenticación
        if (username === 'admin' && password === 'password') {
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
