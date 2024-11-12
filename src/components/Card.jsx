const Card = ({ image, name }) => {
  return (
    <div className="flex h-64 w-60 flex-col items-center justify-center rounded-lg border border-solid border-fuchsia-800 p-3 shadow-xl shadow-fuchsia-300">
      <img className="max-h-44 max-w-52" src={image} alt={name} />
      <h4 className="text-center text-lg">{name}</h4>
    </div>
  );
};
export default Card;
