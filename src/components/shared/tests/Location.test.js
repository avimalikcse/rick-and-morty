import { render, waitFor } from '@testing-library/react';
import Location from '../Location';

test('renders app with Site Header', async() => {
    const mockSuccessResponse = {
        id: 1,
        name: "Earth (C-137)",
        type: "Planet",
        dimension: "Dimension C-137"
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const { getByText } = render( < Location url = 'https://rickandmortyapi.com/api/location/1' / > );
    await waitFor(() => expect(getByText("Earth (C-137)")).toBeTruthy());
});