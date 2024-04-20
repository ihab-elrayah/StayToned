// Sample reviews data
let reviewsData = [
  { name: 'John Doe', date: 'April 15, 2024', review: 'Great product! Really satisfied with the quality.' },
  { name: 'Jane Smith', date: 'April 18, 2024', review: 'Excellent service. Quick delivery and friendly staff.' },
  { name: 'Sam Johnson', date: 'April 20, 2024', review: 'Superb experience. Will definitely recommend to friends.' }
];

// Function to display reviews
function displayReviews() {
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';

  reviewsData.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    const reviewContent = `
      <p class="name">${review.name}</p>
      <p class="date">${review.date}</p>
      <p class="text">${review.review}</p>
    `;

    reviewDiv.innerHTML = reviewContent;
    reviewsContainer.appendChild(reviewDiv);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get values from form
  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;
  const review = document.getElementById('review').value;

  // Add new review to reviewsData array
  reviewsData.push({ name, date, review });

  // Display updated reviews
  displayReviews();

  // Reset form fields
  document.getElementById('review-form').reset();
}

// Call the function to display reviews when the page loads
document.addEventListener('DOMContentLoaded', displayReviews);

// Add event listener to form submit event
document.getElementById('review-form').addEventListener('submit', handleSubmit);