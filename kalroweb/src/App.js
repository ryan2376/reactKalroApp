import KenyaAgriculturalandLivestockResearc from './Kenya Agricultural and Livestock Researc.png'
import './App.css';

function App() {
  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
          <a className="navbar-brand" href="#">
              <img src={KenyaAgriculturalandLivestockResearc} alt="#"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        </nav>
        {/* <!-- Hero Section -->  */}
  <section className="jumbotron">
    <div className="container text-center">
      <h1>Welcome to KALRO</h1>
      <p>Agricultural Research and Development Organization</p>
      <a className="btn btn-primary" href="#">Learn More</a>
    </div>
//   </section>
     {/* { <!-- About Section --> } */}
   <section className="container">
     <div className="row"> */
       <div className="col-md-6">
        <h2>About KALRO</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in fermentum elit, nec ullamcorper lorem.
          Fusce finibus arcu quis magna maximus, sed maximus justo congue.</p>
        <p>Phasellus vitae massa vel nunc aliquam vestibulum ac a purus. Fusce at aliquet nisl. Proin tempus fringilla
          vulputate.</p>
      </div>
      <div className="col-md-6">
      <img src={KenyaAgriculturalandLivestockResearc} alt="#"/>
      </div>
    </div>
  </section>
  {/*Services Section */}
<section className="container">
    <h2>Our Services</h2>
    <div className="row">
       <div className="col-md-4">
        <div className="card">
          <img src={"/images/justus-menke-zRqRhIJqdnI-unsplash.jpg"} alt="Service 1" className="card-img-top">
          <div className="card-body">
            <h5 className="card-title">Service 1</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={"/images/markus-spiske-sFydXGrt5OA-unsplash.jpg"} alt="Service 2" className="card-img-top">
          <div className="card-body">
            <h5 className="card-title">Service 2</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */
          /* </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <img src={"/images/annie-spratt-QYcSeY7vuZM-unsplash.jpg"} alt="Service 3" className="card-img-top">
          <div className="card-body">
            <h5 className="card-title">Service 3</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div> 
        );
  }
  
  export default App;