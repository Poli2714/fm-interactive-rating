'use strict';

const card = document.querySelector('.card');
const ratingBtns = document.querySelectorAll('.btn');
const thankYouCard = document.querySelector('.thank-you-card');
const userRatingSpan = document.querySelector('.user-rating');

let userRating = '';

card.addEventListener('click', function (e) {
  const target = e.target;
  if (!target.classList.contains('interactive')) return;

  if (target.classList.contains('star')) {
    target.classList.toggle('star-selected');
  }

  if (target.classList.contains('icon')) {
    target.parentElement.classList.toggle('star-selected');
  }

  if (target.classList.contains('btn')) {
    if (target.classList.contains('selected')) return;
    ratingBtns.forEach(btn => btn.classList.remove('selected'));
    target.classList.add('selected');
    userRating = target.textContent;
  }

  if (target.classList.contains('submit-btn')) {
    if (!userRating) return;
    target.parentElement.classList.add('hidden');
    thankYouCard.classList.remove('hidden');
    userRatingSpan.textContent = userRating;
  }
});
