import { useEffect } from "react";
import { init } from "./utils/initDroneLayer";

function App() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
      <div className="hero">
        <h1 className="title">hter uh jk</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          voluptates vero pariatur consectetur omnis id qui, quo reiciendis
          laboriosam et dignissimos repudiandae praesentium! Facere in iste unde
          et labore. Fugiat mollitia quibusdam officia. Tenetur amet pariatur
          eos culpa asperiores odio!
        </p>
        <p>
          <button className="btn">something</button>
        </p>
      </div>
    </div>
  );
}

export default App;
