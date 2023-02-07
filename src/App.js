import './App.css';
import Navbar from "./Navbar";
import Mycard from "./Mycard";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
        <h1 style={{textAlign : "center"}}>EVENTIFY ORGANIZERS</h1>


        <p style={{textAlign: "center"}}>
            Are you looking for activities in Canada?
            Let's explore all the events which are hosted by our organizers on our website!!
            We have a tonne of fantastic suggestions and events, whether you're a local, a visitor, or just passing through.
            You can browse events from our organizers by clicking the link of them.

        </p>
       <Mycard></Mycard>
    </div>
  );
}

export default App;
