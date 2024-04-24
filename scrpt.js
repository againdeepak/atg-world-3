const loading = document.querySelector('.loading');
const submitBtn = document.querySelector('#submitBtn');
submitBtn.addEventListener('click', () => {
    loading.style.display = 'flex';
    submitBtn.style.cursor = 'not-allowed';

    // settime out fun for 2 second 
    setTimeout(() => {
        loading.style.display = 'none';
        submitBtn.style.textDecoration = 'none'
        submitBtn.style.cursor = 'pointer';
    }, 2000);
})

const inputField = document.querySelector('.input-large');
inputField.addEventListener('input', function () {
    inputField.classList.add('typing');
});
inputField.addEventListener('blur', function () {
    inputField.classList.remove('typing');
});