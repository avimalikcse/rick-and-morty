import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import { character } from './consts';

const characters = [character]

test('renders app with Site Header', () => {
            const { getByTestId } = render( < CardList characters = { characters }
                / > );
                expect(getByTestId(`charCard${characters[0].id}`)).toBeTruthy();

            });