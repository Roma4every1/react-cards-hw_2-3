import React, { useState } from "react";
import styles from "./card.module.css";
import { CardProps } from "../../models/card";
import { IconButton, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import {
  setCardsToStore,
  setFavoriteCardsToStore,
} from "../../store/reducers/cardReducer/actions";
import Modal from "@mui/material/Modal";

const Card: React.FC<CardProps> = (props: CardProps) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
  };
  const { title, imgSrc, text, variant, isLiked } = props;
  const { cards } = useAppSelector((state) => state.cards);
  const dispatch = useAppDispatch();
  const handleLike = (title: string) => {
    const newCards = cards.map((card) =>
      card.title === title ? { ...card, isLiked: !card.isLiked } : card
    );
    dispatch(setCardsToStore(newCards));
    dispatch(setFavoriteCardsToStore(newCards.filter((card) => card.isLiked)));
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {variant === "large" || variant === "featured-large" ? (
        <div className={styles[`card-${variant}`]}>
          <div className={styles[`text-block-${variant}`]}>
            <h2 className={styles[`title-${variant}`]} onClick={handleOpen}>
              {title}
            </h2>
            <p onClick={() => {}}>{text}</p>

            {variant === "featured-large" ? (
              <div></div>
            ) : (
              <div>
                <IconButton onClick={() => handleLike(title)}>
                  {isLiked ? <StarIcon /> : <StarBorderIcon />}
                </IconButton>
              </div>
            )}
          </div>
          <img
            src={imgSrc}
            alt={title}
            style={{ width: "auto", height: "250px" }}
            onClick={handleOpen}
          />
        </div>
      ) : variant === "medium" || variant === "featured-medium" ? (
        <div className={styles[`card-${variant}`]}>
          <img src={imgSrc} alt={title} onClick={handleOpen} />
          <h2 className={styles[`title-${variant}`]} onClick={handleOpen}>
            {title}
          </h2>
          {variant === "featured-medium" ? (
            <div></div>
          ) : (
            <div>
              <IconButton onClick={() => handleLike(title)}>
                {isLiked ? <StarIcon /> : <StarBorderIcon />}
              </IconButton>
            </div>
          )}
        </div>
      ) : (
        <div className={styles[`card-${variant}`]}>
          <div className={styles[`text-block-${variant}`]}>
            <h2 className={styles[`title-${variant}`]} onClick={handleOpen}>
              {title}
            </h2>
            {variant === "featured-small" ? (
              <div></div>
            ) : (
              <div>
                <IconButton onClick={() => handleLike(title)}>
                  {isLiked ? <StarIcon /> : <StarBorderIcon />}
                </IconButton>
              </div>
            )}
          </div>
          <img
            src={imgSrc}
            alt={title}
            style={{ width: "auto", height: "100px" }}
            onClick={handleOpen}
          />
        </div>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, maxWidth: "400px" }}>
          <img
            src={imgSrc}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default Card;
