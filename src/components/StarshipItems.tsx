import { useState } from "react";
import { Films, Starship } from "../types";

interface StarshipItemProps {
  starship: Starship;
}

const StarshipItem: React.FC<StarshipItemProps> = ({ starship }) => {
  const [films, setFilms] = useState<Films[]>([]);
  const [showFilms, setShowFilms] = useState<boolean>(false);

  const handleStarshipClick = async () => {
    if (showFilms) {
      setShowFilms(false);
    } else {
      if (films.length === 0) {
        const filmPromises = starship.films.map((filmUrl) =>
          fetch(filmUrl).then((res) => res.json())
        );
        const filmData = await Promise.all(filmPromises);
        // console.log('film Data ',filmData);

        setFilms(filmData);
      }
      setShowFilms(true);
    }
  };

  return (
    <li
      onClick={handleStarshipClick}
      className=" p-4 mb-2 bg-slate-200 cursor-pointer rounded-2xl"
    >
      <div className="flex justify-between">
        <h3> {starship.name}</h3>
        {showFilms && (
          <svg
            className="h-8 w-8 text-black-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
        {!showFilms && (
          <svg
            className="h-8 w-8 text-black-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
      </div>
      {showFilms && (
        <ul>
          {films.map((film, index) => (
            <li className="" key={index}>
              <span>{film?.title}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default StarshipItem;
