import "./premium.css";
function Premium() {
  return (
    <div className="plan-card">
      {/* Keep all your existing Basic content here */}

      <h1>Pro</h1>
      <hr />
      <p>$19/month</p>
      <div> For freelancers and growing teams.</div>
      <hr />
      <p>
        <span className="correct">✓</span> 10 Projects
      </p>
      <p>
        <span className="correct">✓</span>Priority Support
      </p>
      <p>
        <span className="correct">✓</span>Basic Analytics
      </p>
      <p>
        <span className="wrong">X</span>
        <span className="notIncluded">Custom domain</span>
      </p>
      <p>
        <button className="myButton">Get Pro</button>
      </p>
    </div>
  );
}
export default Premium;
