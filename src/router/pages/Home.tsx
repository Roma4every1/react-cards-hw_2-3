import { BrowserRouter, Link } from "react-router-dom";
import Card from "../../components/card/card";
import { useAppDispatch, useAppSelector } from "../../store/reducers/store";
import StarIcon from "@mui/icons-material/Star";
import SearchBar from "../../components/searchBar/searchBar";
import {
  setCardsToStore,
  setFilteredCardsToStore,
  setSearchKeyword,
} from "../../store/reducers/cardReducer/actions";
import { useEffect, useState } from "react";
import { DrawerMenu } from "../../components/drawer/drawer";

export const Home: React.FC = () => {
  const { cards } = useAppSelector((state) => state.cards);
  const { filteredCards } = useAppSelector((state) => state.cards);
  const { searchKeyword } = useAppSelector((state) => state.cards);
  const [displayedCards, setDisplayedCards] = useState(cards);
  const dispatch = useAppDispatch();
  console.log(cards);

  useEffect(() => {
    dispatch(setFilteredCardsToStore(searchKeyword));
  }, [searchKeyword, dispatch]);
  useEffect(() => {
    setDisplayedCards(searchKeyword ? filteredCards : cards);
  }, [searchKeyword, cards, filteredCards]);

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
        <SearchBar onChange={(value) => dispatch(setSearchKeyword(value))} />
        <Link to="/featuredCards">
          <StarIcon sx={{ fontSize: "50px" }} />
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
        {displayedCards.map((card) => (
          <Card
            title={card.title}
            text={card.text}
            imgSrc={card.imgSrc}
            variant={card.variant}
            isLiked={card.isLiked}
          />
        ))}
      </div>
    </div>
  );
};
