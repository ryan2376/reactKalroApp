import logo from './Kenya Agricultural and Livestock Researc.png'
import annie from './annie-spratt-QYcSeY7vuZM-unsplash.jpg'
import service1 from './justus-menke-zRqRhIJqdnI-unsplash.jpg'
import service2 from './markus-spiske-sFydXGrt5OA-unsplash.jpg'
import './App.css';

function App() {
  return (
    <div>
      <script 
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
      <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"/>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="#"/>
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
      </nav>
      {/* </div> */}
   
          {/* <!-- Hero Section -->  */}
    <section className="jumbotron">
      <div className="container text-center">
        <h1>Welcome to KALRO</h1>
        <p>Agricultural Research and Development Organization</p>
        <a className="btn btn-primary" href="#">Learn More</a>
      </div>
    </section>
      {/* { <!-- About Section --> } */}
    <section className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>About KALRO</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in fermentum elit, nec ullamcorper lorem.
            Fusce finibus arcu quis magna maximus, sed maximus justo congue.</p>
          <p>Phasellus vitae massa vel nunc aliquam vestibulum ac a purus. Fusce at aliquet nisl. Proin tempus fringilla
            vulputate.</p>
        </div>
        <div className="col-md-6">
        <img src={logo} alt="#"/>
        </div>
      </div>
    </section>
    {/*Services Section */}
  <section className="container">
      <h2>Our Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src={service1} alt="Service 1" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Service 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          </div>
        <div className="col-md-4">
          <div className="card">
            <img src={service2} alt="Service 2" className="card-img-top"/>
            <div className="card-body">
              <h5 className="card-title">Service 2</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src={annie} alt="Service 3" className="card-img-top"/>
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

  