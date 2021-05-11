import { render, waitFor } from '@testing-library/react';
import HomePage from './HomePage';

test('renders App and check API data loaded', async() => {

    const mockSuccessResponse = { results: [], info: {} };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    const { getByTestId } = render( < HomePage / > )
    expect(getByTestId('homePageLoader')).toBeInTheDocument()
    await waitFor(() => expect(getByTestId("homePageComponent")).toBeInTheDocument());

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character?page=1');
})