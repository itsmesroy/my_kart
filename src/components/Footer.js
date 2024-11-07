import React from "react";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="row ">
          <button className="btn btn-danger col-2" onClick={this.props.handleReset}>
            Reset
          </button>
          <div className="col-8 text-center">
            Total Bill: ₹ {this.props.totalAmount}
          </div>
          <button className="btn btn-primary col-2">Pay Now</button>
        </div>

        <div className="card ">
          <div className="card-header text-center mt-4 fixed-bottom">
            @FlourWish
          </div>
          <div className="card-body fixed-bottom">
            <blockquote className="blockquote mb-0 fixed-bottom">
              <p>Explore the Best Bakery in Town</p>
              <footer className="blockquote-footer fixed-bottom">
                by Sroweta Kar
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
