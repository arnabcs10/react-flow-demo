import React, {useState,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import AddCard from "./AddCard";
let count = 1;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeigth:true
};
const CardResponse = () => {
  const [cards, setCards] = useState([]);

  const addAnotherCard = ()=>{
    ++count;
    const newCard = {
        id: count,
        src:"",
        title:"",
        decription:""
    }
    setCards(cards => [...cards,newCard]);
}

  useEffect(() => {
    setCards([{
      id:count,
      src:"",
      title:"",
      description:""
    }])
  }, [])
  return (
    <div className="cards" style={{
      margin:"10px",
      textAlign:"center"
    }}>
      <Slider {...settings}>
      { cards.map(card => <Card key={card.id} card={card} setCards={setCards}/> )}
      {cards.length <10 &&(<AddCard addAnotherCard={addAnotherCard}/>)}
      
      </Slider>
    </div>
  );
};

export default CardResponse;
