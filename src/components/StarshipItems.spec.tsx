import { it, expect, describe } from 'vitest';
import { fireEvent, render, screen, waitFor} from '@testing-library/react';
import StarshipItem from './StarshipItems';
import { Starship } from '../types';
// import {vi} from 'vitest';
const starship:Starship = {
    "name": "CR90 corvette",
    "films": [
      "https://swapi.dev/api/films/1/",
    ],
  };

 
describe('Render', () => {
 
    it('should render the name of the starship ', async() => {
        render(<StarshipItem starship={starship}  />);
        await waitFor(() => expect(screen.getByText('CR90 corvette')).toBeInTheDocument());
        
    });
    it('should render the name of the related starship names when we click on starship names ', async() => {
        render(<StarshipItem starship={starship}  />);
        await waitFor(() => expect(screen.getByText('CR90 corvette')).toBeInTheDocument());
        fireEvent.click(screen.getByText('CR90 corvette'));
        await waitFor(()=>expect(screen.getByText('A New Hope')).toBeInTheDocument());
    });

    it('should hide the related films when we click twice ', async() => {
        render(<StarshipItem starship={starship}  />);
        await waitFor(() => expect(screen.getByText('CR90 corvette')).toBeInTheDocument());
        fireEvent.click(screen.getByText('CR90 corvette'));
        await waitFor(()=>expect(screen.getByText('A New Hope')).toBeInTheDocument());
        fireEvent.click(screen.getByText('CR90 corvette'));
        await waitFor(()=>expect(screen.queryByText('A New Hope')).not.toBeInTheDocument());

    });


})