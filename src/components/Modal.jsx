// import {wishlistData} from '../pages/Home';
import {useEffect} from 'react';

function Modal(props) {
  let wishlistData = props.data;

  useEffect(() => {
    wishlistData = props.data;
  }, [props]);
  const handleClick = () => {
    console.log(wishlistData);
    const modal = document.getElementById('about-modal');
    modal.style.display = 'none';
  }

  return (
    <div id="about-modal" className="modal">
      <div className="modal-content animate-top">
        <span 
        className="close" 
        onClick={handleClick}>
          <i className="fa fa-times-circle"></i>
        </span>
        <p>
          {
            (wishlistData) && 
            wishlistData.map((item, index) => {
              return <h2>{item}</h2>
            })
          }
        </p>
      </div>
    </div>
  );
}

export default Modal;