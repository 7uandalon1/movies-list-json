import React from "react";
import { Link } from "wouter";


const Row = ({ title, isLargeRow, movies }) => {
  // const baseUrl = "./assets/moviescarat/";
  return (
    <div className=" text-white ml-[20px] flex flex-col ">
      <h2 className="text-xl font-bold capitalize">
        {title}
      </h2>
      
      <div className="movies-container grid">
        
        {movies && movies.map(unitary_movie =>{
          return(
            <React.Fragment>
                <Link to={"/view/" + unitary_movie.id}>
                  <img  
                  key={unitary_movie.id}             // onClick={() => alert("funciona click")}
                  className={`movie_poster`}
                  src= {unitary_movie.poster}
                  alt={unitary_movie.title} />
                </Link>
            </React.Fragment>
        )}
        )}
      </div>
    </div>
  );
};
export default Row;
