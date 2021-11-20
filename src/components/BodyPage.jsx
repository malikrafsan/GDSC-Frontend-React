import data from '../data/data'
import Card from "./Card"

function Home () {
  return (
    <div id="card-container">
      <h1 className="home-title">Top 15 Underrated Movies 2020</h1>
      <div className="card-container animate-bottom">
        {data.map((movieData) => {
          return <Card key={movieData.id} {...movieData}></Card>
        })}
      </div>
    </div>
  );
}

export default Home;