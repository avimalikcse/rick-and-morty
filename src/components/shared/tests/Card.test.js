import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';
import { character } from './consts';

const props = { character }
test('renders app with Site Header', () => {
            const { getByText, getByTestId } = render( < Card {...props }
                / >);
                expect(getByText(character.name)).toBeTruthy(); fireEvent.click(getByText(/Show Episode/i)); expect(getByTestId('episodeComp')).toBeTruthy();
            });