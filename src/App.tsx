import React, {useEffect} from 'react';
import './App.css';
import Card from './components/card/card';
import { useState } from 'react';
import { BrowserRouter  as Router, Route, Link, Routes} from "react-router-dom";
import { CardPage } from './pages/CardPage';
import { FeaturedPage } from './pages/FeaturedPage';
import { Home } from './pages/Home';
export interface CardData {
  id: number;
  title: string;
  text: string;
  imgSrc: string;
  variant: "small"|"large"|'medium';
  isLiked: boolean;
}
const App = () => {
  
  const [cards, setCards] = useState<CardData[]>([
    {
      id: 1,
      title: "Large Card",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel enim ullamcorper tristique. Nulla facilisi. Nam fermentum bibendum nibh, eget vulputate libero consectetur id. Etiam auctor blandit justo vitae lacinia. ",
      imgSrc:
        "https://kartinki.pics/uploads/posts/2021-02/1612296565_47-p-anime-nyashka-art-kartinki-56.jpg",
      isLiked: false,
      variant:'large'
    },
    {
      id: 2,
      title: "Small Card",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel enim ullamcorper tristique. Nulla facilisi. Nam fermentum bibendum nibh, eget vulputate libero consectetur id.",
      imgSrc:
        "https://www.meme-arsenal.com/memes/4f36bbe480e6482e4c10882cd3aba0a6.jpg",
        variant:'small',
        isLiked:false
    },
    {
      id: 3,
      title: "Medium Card",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel enim ullamcorper tristique. Nulla facilisi. Nam fermentum bibendum nibh, eget vulputate libero consectetur id.",
      imgSrc:
        "https://pibig.info/uploads/posts/2021-05/1620330663_30-pibig_info-p-anime-nyashki-ocharovashki-anime-krasivo-35.jpg",
        isLiked:false,
        variant:"medium"
    },
  ]);
  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    if (storedLikes) {
      const parsedLikes = JSON.parse(storedLikes);
      setCards((prevState) =>
        prevState.map((card) =>
          parsedLikes.includes(card.id)
            ? { ...card, isLiked: true }
            : card
        )
      );
    }
  }, []);

  useEffect(() => {
    const likedCards = cards.filter((card) => card.isLiked);
    localStorage.setItem("likes", JSON.stringify(likedCards.map((card) => card.id)));
  }, [cards]);

  const setLiked = (id: number) => {
    setCards((prevState) =>
      prevState.map((card) => (card.id === id ? { ...card, isLiked: true } : card))
    );
  };

  const setDisliked = (id: number) => {
    setCards((prevState) =>
      prevState.map((card) => (card.id === id ? { ...card, isLiked: false } : card))
    );
  };

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home cards={cards} setLiked={setLiked} setDisliked={setDisliked} />} />
      <Route path="/featured" element={<FeaturedPage cards={cards.filter((card) => card.isLiked)} />} />
        <Route path="/card/:id" element={<CardPage cards={cards}/>}/>
      </Routes>
    </div>
  );
};
export default App
