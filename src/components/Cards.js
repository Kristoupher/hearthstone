import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Cards = () => {
  const [cardData, setCardData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
      headers: {
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "57a414d1bemsh2253660a6cbb47ep102932jsn0bd0e6a602af",
      },
    };

    axios
      .request(options)
      .then((response) => setCardData(response.data.Classic));
  }, []);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
  };

  console.log(searchTerm);

  return (
    <>
      <img id="logo" src="./img/hearthstone-logo.png" alt="" />
      <div id="search">
        <input
          type="text"
          placeholder="Rechercher une carte "
          onChange={handleSearchTerm}
        />
      </div>
      <div>
        {cardData
          .filter((val) => {
            return val.name.toLowerCase().includes(searchTerm);
          })
          .map((card) => <Card key={card.cardId} card={card} />)
          .reverse()}
      </div>
    </>
  );
};

export default Cards;
