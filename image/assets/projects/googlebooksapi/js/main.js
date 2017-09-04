function bookSearch() {
  //STORE USER INPUT
  var search = document.getElementById('search').value;
  //CLEAR ANY PREVIOUS DATA FROM SEARCHES
  document.getElementById('results').innerHTML = "";

  //MAKE A DATA REQUESTION ON THE SEARCH BOOKSEARCH
  $.ajax({
    // URL FOR DATABASE
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",
    type: 'GET',
    //ON SUCCESS, DO THIS ACTION
    success: function(data) {
      // DISPLAY DATA BEING PASSED THROUGH
      console.log(data);

      // LOOP THROUGH DATA IN DATA.ITEMS
      for (var i = 0; i < data.items.length; i++) {
        // STORE CURRENT BOOKS VOLUME INFO
        var jdata = data.items[i].volumeInfo;

        //CREATE ELEMETS FOR EACH SECTION
        var newColSm4 = document.createElement('div');
        var newImg = document.createElement('img');
        var newH2 = document.createElement('h2');
        var newH3 = document.createElement('h3');
        var newH4 = document.createElement('h4');
        var newAnchor = document.createElement('a');

        // ADD CLASSES TO ELEMENTS
        newColSm4.className = 'col-sm-12 col-md-8 col-md-offset-2 item';
        newAnchor.className = 'btn btn-primary';

        // ADD TEXT TO TAGS
        newH2.innerText = jdata.title;
        newAnchor.innerText = 'Learn More';

        // ADD ATTRIBUTES
        newAnchor.href = jdata.infoLink;
        newAnchor.setAttribute('target', '_blank');

        // CREATE IMAGE IF ONE EXISTS
        if (jdata.imageLinks) {
          newImg.src = jdata.imageLinks.thumbnail;
        } else {
          newImg.src = 'img/nobook.jpg';
        }
        // CREATE PUBLISHED DATE IF ONE EXISTS
        if (jdata.publishedData) {
          newH4.innerText = jdata.publishedData;
        } else {
          newH4.innerText = 'no publish data found';
        }

        // CREATE AUTHOR IF NO EXISTS
        if (jdata.authors) {
          newH3.innerText = jdata.authors[0];
        } else {
          newH3.innerText = 'no author found';
        }

        // ADD TAGS TO DOCUMENT
        newColSm4.appendChild(newImg);
        newColSm4.appendChild(newH2);
        newColSm4.appendChild(newH3);
        newColSm4.appendChild(newH4);
        newColSm4.appendChild(newAnchor);

        // ADD RESULTS TO THE SCREEN
        var results = document.getElementById('results');
        results.appendChild(newColSm4);
      }
    }

  });

}

// ADD EVENT TO ELEMENT WITH ID="BUTTON"
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', bookSearch, false);
