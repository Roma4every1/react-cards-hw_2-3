import React from "react";
import Card from "../../components/card/card";
import { BrowserRouter, Link } from "react-router-dom";
import { useAppSelector } from "../../store/reducers/store";
import HomeIcon from "@mui/icons-material/Home";
import { DrawerMenu } from "../../components/drawer/drawer";

export const FeaturedPage: React.FC = () => {
  const { favoriteCards } = useAppSelector((state) => state.cards);
  return (
    <div>
      <nav
        style={{
          height: "80px",
          border: "2px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          position: "fixed",
          width: "100%",
          background: "white",
          top: "0",
        }}
      >
        <DrawerMenu />
        <Link to="/">
          <HomeIcon sx={{ fontSize: "50px" }} />
        </Link>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "2rem",
          marginTop: "7rem",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Featured Cards</h2>
        {favoriteCards.map((card) => (
          <Card
            title={card.title}
            text={card.text}
            imgSrc={card.imgSrc}
            variant={`featured-${card.variant}`}
            isLiked={card.isLiked}
          />
        ))}
      </div>
    </div>
  );
};
