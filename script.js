const faq = document.querySelectorAll('.faq');

faq.forEach(faq =>{
    const icon = faq.querySelector('.icon');
    const answer = faq.querySelector('.answer');

    faq.addEventListener('click', () =>{
        if(icon.classList.contains('active')){
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});