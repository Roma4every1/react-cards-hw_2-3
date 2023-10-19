import React, { useState } from "react";
import styles from "./card.module.css";
import OnDislike from "../../images/ondislike";
import OnLike from "../../images/onlike";     
import OffDislike from "../../images/offdislike"; 
import OffLike from "../../images/offlike"; 
import { BrowserRouter, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface CardProps {
  id:number;
  title: string;
  imgSrc: string;
  text: string;
  variant: string;
  isLiked:boolean;
  setLiked: (id: number) => void;
  setDisliked: (id: number) => void;
} 



const Card: React.FC<CardProps> = (props) => {
  let { title, imgSrc, text, variant, id, isLiked, setLiked, setDisliked} = props;
  const navigate = useNavigate();
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDislike] = useState<boolean>(false);
  useEffect(() => {
    const savedLikes = localStorage.getItem(`card-${id}-likes`);
    const savedDislikes = localStorage.getItem(`card-${id}-dislikes`);
    if (savedLikes) {
      setLike(JSON.parse(savedLikes));}
    if(savedDislikes){ setDislike(JSON.parse(savedDislikes))}
  }, [id]);
  

  const handleLike = () => {
    if (isLiked) {
      setDisliked(id)
    } else {
      setLiked(id);
    }
    const newLiked = !like
    setLike(newLiked);
    setDislike(false);
    localStorage.setItem(`card-${id}-likes`,JSON.stringify(newLiked))
    localStorage.setItem(`card-${id}-dislikes`,JSON.stringify(false))
  };
  const handleDislike = () => {
    setDisliked(id)
    
    const newDisliked = !dislike
    setDislike(newDisliked);
    setLike(false)
    localStorage.setItem(`card-${id}-dislikes`,JSON.stringify(newDisliked))
    localStorage.setItem(`card-${id}-likes`,JSON.stringify(false))
  };
  return variant === "large"||variant==="featured-large" ? (
   <div className={styles[`card-${variant}`]}>
      <div className={styles[`text-block-${variant}`]}>
        <h2 className={styles[`title-${variant}`]} onClick={() => navigate(`/card/${id}`)}>{title}</h2>
        <p onClick={() => navigate(`/card/${id}`)}>{text}</p>
        
        {variant==="featured-large"?<div></div>:
        <div>
          <button onClick={handleLike}>
            {like ? <div><OnLike/></div> : <div><OffLike/></div>}
          </button>
          <button onClick={handleDislike}>
            {dislike ? <div><OnDislike/></div> : <div><OffDislike/></div>}
          </button>
        </div>}
      </div>
      <img src={imgSrc} alt={title} style={{width:'auto', height:'250px'}} onClick={() => navigate(`/card/${id}`)}/>
    </div>
  ) : variant === "medium"||variant==="featured-medium" ? (
   <div className={styles[`card-${variant}`]}>
        <img src={imgSrc} alt={title} onClick={() => navigate(`/card/${id}`)}/>
      <h2 className={styles[`title-${variant}`]} onClick={() => navigate(`/card/${id}`)}>{title}</h2>
      {variant==="featured-medium"?<div></div>:
        <div>
          <button onClick={handleLike}>
            {like ? <div><OnLike/></div> : <div><OffLike/></div>}
          </button>
          <button onClick={handleDislike}>
            {dislike ? <div><OnDislike/></div> : <div><OffDislike/></div>}
          </button>
        </div>}
    </div>
  ) : (
     <div className={styles[`card-${variant}`]}>
      <div className={styles[`text-block-${variant}`]}>
        <h2 className={styles[`title-${variant}`]} onClick={() => navigate(`/card/${id}`)}>{title}</h2>
        {variant==="featured-small"?<div></div>:
        <div>
          <button onClick={handleLike}>
            {like ? <div><OnLike/></div> : <div><OffLike/></div>}
          </button>
          <button onClick={handleDislike}>
            {dislike ? <div><OnDislike/></div> : <div><OffDislike/></div>}
          </button>
        </div>}
      </div>
      <img src={imgSrc} alt={title} style={{width:'auto', height:'100px'}} onClick={() => navigate(`/card/${id}`)}/>
    </div>
  );

};

export default Card;
