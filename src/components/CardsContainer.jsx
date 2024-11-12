import Card from "./Card";

const CardsContainer = ({ characters }) => {
  //map cards to the container element

  const placeholder = "https://placedog.net/500";
  return (
    <div className="flex flex-row flex-wrap gap-6 p-6">
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
