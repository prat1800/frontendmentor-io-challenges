const btnSubmit = document.querySelector('.btn-submit');
const ratingForm = document.querySelector('.rating-form');
const thankyouForm = document.querySelector('.thankyou-form');
const ratingSelected = document.querySelectorAll('.number');
const finalRating = document.querySelector('.rating-selected');

let prevRatingSelected, currRatingSelected;

btnSubmit.addEventListener('click', function () {
    ratingForm.classList.add('on-submit');
    finalRating.innerText = `You have selected ${currRatingSelected.textContent} out of 5`;
    thankyouForm.classList.add('on-submit');
});

const handleSelectedRating = function () {
    currRatingSelected.classList.toggle('selected');
    if (prevRatingSelected && (prevRatingSelected !== currRatingSelected)) {
        (prevRatingSelected.classList.remove('selected'));
    };
    prevRatingSelected = currRatingSelected;
}

ratingSelected.forEach(rating => {
    rating.addEventListener('click', function () {
        switch (rating.textContent) {
            case "1":
                currRatingSelected = rating;
                handleSelectedRating();
                break;
            case "2":
                currRatingSelected = rating;
                handleSelectedRating();
                break;
            case "3":
                currRatingSelected = rating;
                handleSelectedRating();
                break;
            case "4":
                currRatingSelected = rating;
                handleSelectedRating();
                break;
            case "5":
                currRatingSelected = rating;
                handleSelectedRating();
        }

    })
});