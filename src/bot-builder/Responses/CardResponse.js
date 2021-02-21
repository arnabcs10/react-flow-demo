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

  const shiftLeft = (id)=>{
    let currentIndex, prevIndex;
    setCards(cards => {
      let cardsArr = cards.map(cr => cr);
      let i;
      for(i=0;i<cardsArr.length;i++){
        if(cardsArr[i].id === id)
          break;
      }
      currentIndex=i;
      prevIndex= i-1;
      if(currentIndex > 0){
        let temp;
        temp = cardsArr[prevIndex];
        cardsArr[prevIndex] = cardsArr[currentIndex];
        cardsArr[currentIndex] = temp;
        return cardsArr;
      }else{
        return cardsArr;
      }
    })
    
  }
  const shiftRight = (id)=>{
    let currentIndex, nextIndex;
    setCards(cards => {
      let cardsArr = cards.map(cr => cr);
      let i;
      for(i=0;i<cardsArr.length;i++){
        if(cardsArr[i].id === id)
          break;
      }
      currentIndex=i;
      nextIndex= i+1;
      if(currentIndex < cardsArr.length-1){
        let temp;
        temp = cardsArr[nextIndex];
        cardsArr[nextIndex] = cardsArr[currentIndex];
        cardsArr[currentIndex] = temp;
        return cardsArr;
      }else{
        return cardsArr;
      }
    })
    
  }

  const addAnotherCard = ()=>{
    ++count;
    const newCard = {
        id: count,
        src:"",
        title:"",
        description:"",
        buttons:[]
    }
    setCards(cards => [...cards,newCard]);
}

  useEffect(() => {
    setCards([{
      id:count,
      src:"",
      title:"",
      description:"",
      buttons:[]
    }])
  }, [])
  return (
    <div className="cards" style={{
      margin:"10px",
      textAlign:"center"
    }}>
      <Slider {...settings}>
      { cards.map(card => <Card key={card.id} card={card} setCards={setCards} shiftLeft={shiftLeft} shiftRight={shiftRight} cardCount={cards.length}/> )}
      {cards.length <10 &&(<AddCard addAnotherCard={addAnotherCard}/>)}
      
      </Slider>
    </div>
  );
};

export default CardResponse;
