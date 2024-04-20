import "./reviews.css";

function Reviews () {
  return (
    <div class="container2">
    <h1>Customer Reviews</h1>
    <div id="reviews-container">
    </div>
    <h2>Add Your Review</h2>
    <form id="review-form">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required />
      </div>
      <div>
        <label for="review">Review:</label>
        <textarea id="review" name="review" rows="4" required></textarea>
      </div>
      <button type="submit">Submit Review</button>
    </form>
    <script src="reviews_code.js"></script>
  </div>
  );
}

export default Reviews;