const ratingNumbers = document.querySelectorAll('#rating-number');
const submitBtn = document.querySelector('.rating-submit')
const feedbackContainer = document.querySelector('.feedback-container')
const feedbackConfirm = document.querySelector('.feedback-confirmation')
const selectedNum = document.querySelector('#selected-number')

ratingNumbers.forEach(number => {

    number.addEventListener('click', () =>{

        ratingNumbers.forEach(num => {

            num.style.background = '';
            num.style.color = '';
        });

        number.style.background = 'white';
        number.style.color = 'rgb(25, 32, 42)'

        submitBtn.addEventListener('click', () =>{

            feedbackContainer.style.display = 'none';
            feedbackConfirm.style.display = 'flex';
            selectedNum.classList.toggle('active')
            selectedNum.innerHTML = `<p>You selected ${number.innerHTML} out of 5</p>`
        });
    });
});

