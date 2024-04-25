const loading = document.querySelector('.loading');
const submitBtn = document.querySelector('#submitBtn');
const inputField = document.querySelector('#input-large');

submitBtn.addEventListener('click', () => {
    loading.style.display = 'flex';
    submitBtn.style.cursor = 'not-allowed';

    // settime out fun for 2 second 
    setTimeout(() => {
        loading.style.display = 'none';
        submitBtn.style.textDecoration = 'none'
        submitBtn.style.cursor = 'pointer';
        inputField.value='';

    }, 2000);
})

inputField.addEventListener('input', function () {
    inputField.classList.add('typing');
});
inputField.addEventListener('blur', function () {
    inputField.classList.remove('typing');
});