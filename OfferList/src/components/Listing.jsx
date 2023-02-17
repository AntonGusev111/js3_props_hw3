import React from 'react'
import propTypes from "prop-types"

function checkImage(element){
  if(element.MainImage){
    return (element.MainImage['url_570xN'])
  }else {
    return "https://kartinkof.club/uploads/posts/2022-03/1648669485_3-kartinkof-club-p-kukish-kartinka-smeshnaya-3.jpg"
  }
};

function checkTitleLenhgt(element){
    if(element){
      if (element.length>50){
        return `${element.slice(0, 50)} ...`;
      } else {
        return element
      };
    };
};

function currencySymbol(element){
  if(element.currency_code){
    switch (element.currency_code) {
      case "USD":
        return `$ ${element.price}`;
      case "EUR":
        return `€ ${element.price}`;
      default:
        return `${element.price} ${element.currency_code}`
    };
  };
};


function checkQuantity(element){
  console.log(element.quantity)
  if(element.quantity){
    switch(true){
      case(element.quantity<=10):
        return "item-quantity level-low"
      case(element.quantity<=20):
        return "item-quantity level-medium"
      case(element.quantity>20):
        return "item-quantity level-high"
    }
  }
}


export default function Listing(props) {
    let {data} = props;
    let rend = data.map((element)=>{
      return(<>
      <div class="item" key={element.listing_id}>
        <div class="item-image">
          <a href={element.url}>
            <img src={checkImage(element)}></img>
          </a>
        </div>
        <div class="item-details">
          <p class="item-title">{checkTitleLenhgt(element.title)}</p>
          <p class="item-price">{currencySymbol(element)}</p>
          <p class={checkQuantity(element)} >{element.quantity} left</p>
        </div>
      </div>
      </>)
    })

  return (
    <div>
      <div class="item-list">
        {rend}
      </div>
    </div>
  )
}

Listing.propTypes ={
  data: propTypes.array.isRequired
}

