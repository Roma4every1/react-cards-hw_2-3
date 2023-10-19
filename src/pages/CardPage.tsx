import { CardData } from "../App";
import { CardProps } from "../components/card/card";
import { useParams } from "react-router-dom";
interface Props{
  cards:CardData[]
}
export const CardPage= (props:Props) => {
  const{cards}=props
  const { id } = useParams();
  console.log(id)
  const card = cards.find((card) => card.id === Number(id));
if (card){
  return (
    <>
      <img src={card.imgSrc} alt={card.title} style={{width:'100%'}} />
      <h2>{card.title}</h2>
      <p>{card.text}</p>
    </>
  );}
  else return <></>
};