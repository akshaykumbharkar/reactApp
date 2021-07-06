import "../src/Card.css";
export function Cards(props) {
  console.log(props);
  return (
    <div className="parent">
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src={props.data.image} alt=" " />
        <div class="card-body">
          <h5 class="card-text">{props.data.name}</h5>
          <p class="card-text">{props.data.price}</p>
        </div>
      </div>
    </div>
  );
}
