import Card from "./Card";
import "../styles/CardsContainer.css";

const CardsContainer = ({ characters }) => {
  //map cards to the container element

  const placeholder = "https://placedog.net/500";
  return (
    <div className="cardsContainer">
      {characters.map((character) => {
        return (
          <Card
            key={character._id}
            image={character.photoUrl || placeholder}
            name={character.name}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
