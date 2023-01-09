import "./index.css";

function Card({ title, cover }) {
  return (
    <div className="ContainerCard">
      <img className="pictures" src={cover} alt="Photo_couverture" />
      <h5 className="CardTitle">{title}</h5>
    </div>
  );
}

export default Card;
