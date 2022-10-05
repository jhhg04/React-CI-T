import "./App.css";

function App() {
  return (
  <div className="header content">
   <div className="header-video">
    <video loop autoPlay muted>
      <source src="https://dmwnh9nwzeoaa.cloudfront.net/2022-09/straightforward1.mp4" type="video/mp4" />
      </video>
   </div>
   <div className="header-overlay"></div>
    <div className="header-content">
    <h1>Pokemon</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, asperiores.</p>
    </div>
  </div>
  )
}

export default App;
