import { useParams } from 'react-router';
import data from '../data/data'

export default function MovieDetails() {
  const { id } = useParams();
  let movieData;

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].id)
    if (id === (data[i].id + '')) {
      movieData = data[i]
    }
  }

  return (
    <div className="movie-detail animate-left">
      <h1>{movieData.title}</h1>
      <div className="content">
        <div className="img-container">
          <img src={`../${movieData.imgUrl}`} alt={movieData.title} />
        </div>
        <div className="info-container left">
          <p>
            <span className="info-poin">
              Release date: 
            </span>
            {movieData.releaseDate}
          </p>
          <p>
            <span className="info-poin">
              Director: 
            </span>
            {movieData.director}
          </p>
          <p>
            <span className="info-poin">
              Description: 
            </span>
            {movieData.reason}
          </p>
        </div>
      </div>
    </div>
  );
}