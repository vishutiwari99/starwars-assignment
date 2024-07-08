import { Starship } from "../types";



export const getData = async (): Promise<Starship[]> => {
  const response = await fetch(
    "https://swapi.dev/api/starships/?page=1&format=json"
  );
  const { results }: { results: Starship[] } = await response.json();
  const starshipsWithFilms = await Promise.all(
    results.map(async (item) => {
      return { name: item.name, films: item.films };
    })
  );
  return starshipsWithFilms;
};


