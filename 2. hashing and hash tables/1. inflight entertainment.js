function canTwoMoviesFillFlight(movieLengths, flightLength) {

  // Determine if two movie runtimes add up to the flight length
  // create a set to allow O(1) lookup => O(n)
  const movieLengthsSeen = new Set()

  // loop through movieLengths to find second number in set => O(n)
  for (let i = 0; i < movieLengths.length; i++) {
    if (movieLengthsSet.has(flightLength - movieLengths[i])) {
      // eager evaluation
      return true
    }
    
    // if Set doesn't contain a movie that matches with current movie,
    // add it to the Set and go to next iteration
    movieLengthsSeen.add(firstMovieLength)
  }

  return false
}
