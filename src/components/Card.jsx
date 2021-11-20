import {Link} from "react-router-dom";

function Card (movieData) {
    return (
      <Link to={`/details/${movieData.id}`}>
              <div className="card">
            <div id={movieData.id + ""} className="card-inside">
                <h1 className="title">
                    {movieData.title}
                </h1>
                <div className="img-container">
                    <img src={movieData.imgUrl} alt={movieData.title + " poster"} />
                </div>
                <div className="info-container">
                    <p>
                        <span className="sub-title">
                            Release Date: 
                        </span>
                        {movieData.date}
                    </p>
                    <p>
                        <span className="sub-title">
                            Director: 
                        </span>
                        {movieData.director}
                    </p>
                </div>
            </div>
        </div>
      </Link>
    );
}
 
export default Card;