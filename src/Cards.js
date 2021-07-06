/* eslint-disable jsx-a11y/anchor-is-valid */
export function Cards(props) {
  console.log(props);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.data.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.data.name}</h5>
        <p class="card-text">{props.data.price}</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
