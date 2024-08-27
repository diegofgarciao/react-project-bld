import transactionsService from './transactionsService';

const mockFetch = (response) => {
    return jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve(response),
        })
    );
};

describe('transactionsService', () => {
    it('should fetch and return transactions', async () => {
        global.fetch = mockFetch({ data: [{ id: '12345', status: 'Success' }] });
        const transactions = await transactionsService.getTransactions();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://bold-fe-api.vercel.app/api');
        expect(transactions).toEqual([{ id: '12345', status: 'Success' }]);
    });

    it('should return an empty array when no data is present', async () => {
        global.fetch = mockFetch({});
        const transactions = await transactionsService.getTransactions();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://bold-fe-api.vercel.app/api');
        expect(transactions).toEqual([]);
    });

    it('should handle a network error', async () => {
        global.fetch = jest.fn().mockImplementation(() => Promise.reject('Network Error'));
        await expect(transactionsService.getTransactions()).rejects.toEqual('Network Error');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://bold-fe-api.vercel.app/api');
    });

});
