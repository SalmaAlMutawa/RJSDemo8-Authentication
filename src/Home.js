import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Home = props => {
  const { user } = props;
  return (
    <div className="row d-flex align-items-center" style={{ height: "80vh" }}>
      <Link to="/garbage" className="btn btn-lg btn-outline-secondary mx-auto">
        Random Garbage
      </Link>
      {user && (
        <Link to="/treasure" className="btn btn-lg btn-warning mx-auto">
          TREASURE
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Home);
