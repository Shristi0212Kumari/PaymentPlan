import "./Basic.css";
function Basic() {
  return (
    <div className="plan-card">

      <h1>Basic</h1>
      <hr />
      <p>$0/month</p>
      <div>For learning and small projects.</div>
      <hr />
      <p>
        <span className="correct">✓</span> 1 Project
      </p>
      <p>
        <span className="correct">✓</span> Community Support
      </p>
      <p>
        <span className=" wrong">X</span>
        <span className="notIncluded">Basic Analytics</span>
      </p>
      <p>
        <span className="wrong">X</span>
        <span className="notIncluded">Custom domain</span>
      </p>
      <p>
        <button className="myButton">Start Free </button>
      </p>
    </div>
  );
}
export default Basic;
