import React from "react";


const Row = ({ title, isLargeRow, movies }) => {
  const baseUrl = "./assets/moviescarat/";
  return (
    <div className=" text-white ml-[20px] flex flex-col ">
      <h2 className="text-xl font-bold capitalize">
        {title}
      </h2>
      
      <div className="movie_poster__scrollbar gap-3 flex overflow-y-hidden overflow-x-scroll p-[20px]">
        {movies.map(unitary_movie =>
          <React.Fragment>
            <h1>
              {unitary_movie.title}
            </h1>
            <img
              key={unitary_movie.id}
              onClick={() => alert("funciona click")}
              className={`movie_poster`}
              src= {require(`${baseUrl}${unitary_movie.poster}`).default}
              alt={unitary_movie.name}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
export default Row;
