import React from "react";
import { Link } from "wouter";


const Row = ({ title, isLargeRow, Json, isSeries }) => {
  // const baseUrl = "./assets/Jsoncarat/";
  var ifSeriesStyles = "series ";
  
  if (isSeries){
    return (
      <div className=" text-white ml-[20px] flex flex-col ">
        <h2 className="text-xl font-bold capitalize">
          {title}
        </h2>
        
        <div className= "movie_poster__scrollbar gap-3 flex overflow-y-hidden overflow-x-scroll p-[20px]">
  
          {Json && Json.map(unitary_serie =>{
            return(
              <React.Fragment>
                  <Link to={"/view/" + unitary_serie.id + "/" + unitary_serie.chaptersss}>
                    <img  
                    key={unitary_serie.id}             // onClick={() => alert("funciona click")}
                    className={`movie_poster`}
                    src= {unitary_serie.poster}
                    alt={unitary_serie.title} />
                  </Link>
              </React.Fragment>
          )}
          )}
        </div>
      </div>
    );
  }
  else{
    return (
      <div className=" text-white ml-[20px] flex flex-col ">
        <h2 className="text-xl font-bold capitalize">
          {title}
        </h2>
        
        <div className= {ifSeriesStyles + "movie_poster__scrollbar gap-3 flex overflow-y-hidden overflow-x-scroll p-[20px]"}>
  
          {Json && Json.map(unitary_movie =>{
            return(
              <React.Fragment>
                  <Link to={"/view/" + unitary_movie.id + "/" + unitary_movie.path}>
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
  }

};
export default Row;
