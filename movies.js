// Define the Movie class
let Movie = class {
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating; 
  }
  

  // Method to update the rating of the movie
    updateRating(newRating) {
      this.rating = newRating;
    }
  // Method to display the movie's information
    displayInfo() {
      const MOVIEINFO = document.getElementById("movie-info");
      MOVIEINFO.innerHTML += this.title + "<br>" + this.cast.join(", ") + "<br>" + this.description + "<br>" + "Rating: " + this.rating + "<br><br>";
    }

}
// Test your implementation
let myMovie = new Movie("Spider-Man: Across the Spider-Verse", ["Shameik Moore", "Hailee Steinfeld" , "Brain Tyree Henry"], "Traveling across the multiverse, Miles Morales meets a new team of Spider-People, made up of heroes from different dimensions. But when the heroes clash over how to deal with a new threat, Miles finds himself at a crossroads.", 8.5);
// Display the initial information of the movie
myMovie.displayInfo();
// Update the rating of the movie
myMovie.updateRating(9.5);
// Display the updated information of the movie
myMovie.displayInfo();