import React from "react";
import Card from "../components/card/card";
import { BrowserRouter, Link } from "react-router-dom"

interface LikesPageProps {
  cards: { id: number; title: string; text: string; imgSrc: string; variant: "large"|"small"|'medium'; isLiked: boolean }[];
}

export const FeaturedPage: React.FC<LikesPageProps> = ({ cards }) => {
  return (

    <div>
        <nav style={{height:'80px', border:'2px solid black', display:"flex", justifyContent:'center', alignItems:"center", gap:'2rem', position:'fixed', width:'100%',
background:'white', top:'0'}}>
        
        <Link to="/">To Home</Link>

  </nav>
  <div style={{display:"flex",flexDirection:'column', justifyContent:'center', alignItems:"center", gap:'2rem',marginBottom:'2rem', marginTop:'7rem'}}>
      <h1 style={{textAlign:'center'}}>Liked Cards</h1>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          text={card.text}
          imgSrc={card.imgSrc}
          variant={`featured-${card.variant}`}
          isLiked={card.isLiked}
          setLiked={() => {}}
          setDisliked={() => {}}
        />
      ))}
      </div>
    </div>
  );
};