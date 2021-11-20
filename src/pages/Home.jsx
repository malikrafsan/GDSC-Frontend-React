import data from '../data/data'
import Card from "../components/Card"
import wishlist from '../data/wishlist'
import Modal from "../components/Modal"
import {useEffect} from "react"

const wishlistData = []

const Home = () => {
  const addToWishList = (id) => {
    const res = data.find(datum => datum.id === id);
    console.log(res);
    wishlistData.push(res.title);
    console.log(wishlist);
  }
  const modal = () => {
    return (
      <Modal data={wishlistData}></Modal>
    );
  }
  useEffect(() => {
    modal();
  }, [wishlistData]);


  return (
      <div className="home-page">
          <h1 className="home-title">Top 15 Underrated Movies</h1>
          <div id="card-container">
            <h1 className="home-title">Top 15 Underrated Movies 2020</h1>
            <div className="card-container animate-bottom">
              {data.map((movieData) => {
                return (
                  <div>
                    <Card key={movieData.id} {...movieData}></Card>
                    <button onClick={() => addToWishList(movieData.id)}>Add to wishlist</button>
                  </div>
                );
              })}
            </div>
          </div>
          {modal()}
      </div>
  );
}

export {Home, wishlistData};
