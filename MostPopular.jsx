import "./MostPopular.css";
function MostPopular() {
  return (
    <div className="plan-card">

      <h1>Premium</h1>
      <hr />
      <p>$49/month</p>
      <hr />
      <div> For companies that need it all.</div>
      <p>
        <span className="correct">✓</span>Unlimited Projects
      </p>
      <p>
        <span className="correct">✓</span>24\7 support
      </p>
      <p>
        <span className="correct">✓</span>Advanced analytics
      </p>
      <p>
        <span className="correct">✓</span>Custom domain
      </p>

      <p>
        <button className="myButton">Get Premium</button>
      </p>
    </div>
  );
}
export default MostPopular;
