import "../styles/Card.css";

const Card = ({ key, image, name }) => {
  return (
    <div className="card" key={key}>
      <img className="lab-image" src={image} alt={name} />
      <h4 className="lab-name">{name}</h4>
    </div>
  );
};
export default Card;
