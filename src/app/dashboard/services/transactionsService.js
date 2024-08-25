const transactionsService = {
    getTransactions: async () => {
        const response = await fetch('https://bold-fe-api.vercel.app/api');
        const data = await response.json();
        return data.data || [];
    }
};

export default transactionsService;