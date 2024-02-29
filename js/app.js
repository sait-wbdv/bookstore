document.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById('searchInput');
  let searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  let bookNumber = 0;

  searchButton.addEventListener('click', function() {
      const searchTerm = searchInput.value.trim();
      const results = searchBooksByTitle(searchTerm);
      displaySearchResults(results);
  });

  function displaySearchResults(results) {
      var output = '';
      let bookNumber = 0;
      results.forEach(book => {
          output += `
              <div class="book-item">
                  <h3>${book.title}</h3>
                  <p><strong>Author:</strong> ${book.author}</p>
                  <p><strong>Year:</strong> ${book.year}</p>
                  <section class = "starList" id="list">
                  <i class="fas fa-star star" id="star1"></i>
                  <i class="fas fa-star star" id="star2"></i>
                  <i class="fas fa-star star" id="star3"></i>
                  <i class="fas fa-star star" id="star4"></i>
                  <i class="fas fa-star star" id="star5"></i>
                  </section>
              </div>
          `;
          bookNumber++;
      });
      searchResults.innerHTML = output;
   
      const star1 = document.querySelectorAll('#star1')
      const star2 = document.querySelectorAll('#star2')
      const star3 = document.querySelectorAll('#star3')
      const star4 = document.querySelectorAll('#star4')
      const star5 = document.querySelectorAll('#star5')
      
      const star1Array = Array.from(star1);
      const star2Array = Array.from(star2);
      const star3Array = Array.from(star3);
      const star4Array = Array.from(star4);
      const star5Array = Array.from(star5);


      displayStarOne = (star) => {
        star.addEventListener('click', (event) => {
            
            let index = star1Array.indexOf(event.target)

            if(star2Array[index].classList.contains('gold'))
            {
                star2Array[index].classList.remove('gold');
                star3Array[index].classList.remove('gold');
                star4Array[index].classList.remove('gold');
                star5Array[index].classList.remove('gold');
            }

            else
            {
            event.target.classList.toggle('gold');
            }
        })
      }

      star1Array.forEach(star => {
        displayStarOne(star);
      })

      displayStarTwo = (star) => {
        star.addEventListener('click', (event) => {

            let index = star2Array.indexOf(event.target);
            
            if(star3Array[index].classList.contains('gold'))
            {
                star3Array[index].classList.remove('gold');
                star4Array[index].classList.remove('gold');
                star5Array[index].classList.remove('gold');
            }

            else
            {
               event.target.classList.toggle('gold');
               star1Array[index].classList.add('gold');
            }

            
        })
      }

      star2Array.forEach(star => {
        displayStarTwo(star)
      })


     displayStarThree = (star) => {
        star.addEventListener('click', (event) => {

            let index = star3Array.indexOf(event.target);

            if(star4Array[index].classList.contains('gold'))
            {
              star4Array[index].classList.remove('gold');
              star5Array[index].classList.remove('gold');
            }

            else
            {
              event.target.classList.toggle('gold');
              star1Array[index].classList.add('gold');
              star2Array[index].classList.add('gold');
            }

            
        })
     }

     star3Array.forEach(star => {
        displayStarThree(star)
     })


     displayStarFour = (star) => {
        star.addEventListener('click', (event) => {

            let index = star4Array.indexOf(event.target);

            if(star5Array[index].classList.contains('gold'))
            {
              star5Array[index].classList.remove('gold');
            }

            else
            {
              event.target.classList.toggle('gold');
              star1Array[index].classList.add('gold');
              star2Array[index].classList.add('gold');
              star3Array[index].classList.add('gold');
            }
        })
     }

     star4Array.forEach(star => {
        displayStarFour(star);
     })

     displayStarFive = (star) => {
        star.addEventListener('click', (event) => {

            let index = star5Array.indexOf(event.target);

            event.target.classList.toggle('gold');
            star1Array[index].classList.add('gold');
            star2Array[index].classList.add('gold');
            star3Array[index].classList.add('gold');
            star4Array[index].classList.add('gold');
        })
     }

     star5Array.forEach(star => {
        displayStarFive(star);
     })
      

  }


  
});
