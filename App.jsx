import Basic from "./Basic.jsx";
import Premium from "./Premium.jsx";
import MostPopular from "./MostPopular";
import "./App.css";
function App(){
  return(
  
  <>
<h1 className="headline">Simple, honest pricing</h1>
<div> Pick the plan that fits you. Change it anytime </div>
<div className="pricing-container">
<Basic />
<Premium />
<MostPopular/>
</div>
  </>
  );
} export default App;