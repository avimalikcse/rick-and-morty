import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app with Site Header', () => {
    const { getByTestId } = render( < App / > );
    expect(getByTestId('siteHeader')).toBeTruthy();

});

test('renders app with Cs', () => {
    const { getByTestId } = render( < App / > );
    expect(getByTestId('homePageLoader')).toBeTruthy();

});