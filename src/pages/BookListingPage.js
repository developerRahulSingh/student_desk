import React from "react";
import BookListComponent from "../components/BookListComponent";

function BookListingPage() {
  return (
    <div className="BookListingPage">
      <BookListComponent
        imgLink={""}
        bookTitle={"An atlas of love"}
        authorName={"Anuja Chauhan"}
        cityName={"Navsari"}
        postedByName={"Jill thakkar"}
        price={" 79 | 195"}
        postedOn={"1, Dec"}
      />
    </div>
  );
}

export default BookListingPage;
