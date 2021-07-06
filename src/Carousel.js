const carousel1 = "carousel2.png";
const carousel2 = "carousel1.png";
const carousel3 = "carousel2.png";

export function Carosel() {
  let caroselStyle = { height: "30em" };
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div style={caroselStyle} class="carousel-item active">
          <img src={carousel1} class="d-block w-100" alt="..." />
        </div>
        <div style={caroselStyle} class="carousel-item">
          <img src={carousel2} class="d-block w-100" alt="..." />
        </div>
        <div style={caroselStyle} class="carousel-item">
          <img src={carousel3} class="d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
