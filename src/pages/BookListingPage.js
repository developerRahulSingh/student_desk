import React from 'react';
import HeaderComponentWithMediaQuery from "../components/HeaderComponentWithMediaQuery";


function BookListingPage() {
   return (
        <div className="BookListingPage">
          <HeaderComponentWithMediaQuery/>
          <header className="App-header">
            <p>
              This is BookListingPage.
            </p>
          </header>
        </div>
      );
}

export default BookListingPage;