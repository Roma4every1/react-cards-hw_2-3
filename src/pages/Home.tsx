import { BrowserRouter, Link } from "react-router-dom"
import Card from "../components/card/card"
import { CardProps } from "../components/card/card"
import { CardData } from "../App"

  interface HomeProps {
    cards: CardData[];
    setLiked: (id: number) => void;
    setDisliked: (id: number) => void;
  }

export const Home:React.FC<HomeProps>=(props)=>{
    const{cards, setLiked, setDisliked}=props;
return <div>
  <nav style={{height:'80px', border:'2px solid black', display:"flex", justifyContent:'center', alignItems:"center", gap:'2rem', position:'fixed', width:'100%',
background:'white', top:'0'}}>
        
            <Link to="/featured">To Featured</Link>

      </nav>
      <div style={{display:"flex",flexDirection:'column', justifyContent:'center', alignItems:"center", gap:'2rem',marginBottom:'2rem', marginTop:'7rem'}}>
            {cards.map((card) => (
              <Card key={card.id}
              id={card.id}
              title={card.title}
              text={card.text}
              imgSrc={card.imgSrc}
              variant={card.variant}
              isLiked={card.isLiked}
              setLiked={setLiked}
              setDisliked={setDisliked}/>
            ))}
          </div>
</div>
}