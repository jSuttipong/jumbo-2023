import "../assets/css/App.css";
import Carousel from "../components/Carousel";
function App() {
  // const test = "ds"
  const rows = ["Obj1", "Obj2", "Obj3", "Obj4", "Obj5"];
  const objects = ["Obj1", "Obj2", "Obj3", "Obj4", "Obj5","Obj6", "Obj7"];
  // const objects = [
  //   { item: 1, name: "obj1" },
  //   { item: 2, name: "obj2" },
  //   { item: 3, name: "obj3" },
  //   { item: 4, name: "obj4" },
  //   { item: 5, name: "obj5" },
  //   { item: 6, name: "obj6" },
  //   { item: 7, name: "obj7" },
  // ];

  return (
    <div className="App">
      <div className="Nav">
        <h1>All MY PROJECTS</h1>
      </div>
      <div className="ctn-carousel">
        {/* <div className="btn btn-prev">{`<`}</div>
        <div className="btn btn-next">{`>`}</div>
        {rows.map((row) => (
          <div className="crs-obj">{row}</div>
        ))} */}
        <Carousel objects={objects} />
      </div>
    </div>
  );
}

export default App;
