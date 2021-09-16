import React from "react";

function BookDetailPage({ imgLink }) {
  return (
    <div className="container BookDetailPage">
      <header className="App-header">
        <p>This is BookDetailPage.</p>
      </header>
      <div className="col-lg-3">
        <img
          alt=""
          src={require("../assets/defaultbook.png").default}
          style={{ height: "192px" }}
        />
      </div>
      <div className="col-lg-6"></div>
      <div className="col-lg-3"></div>
    </div>
  );
}

export default BookDetailPage;
