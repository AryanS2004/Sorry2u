const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const gif = document.querySelector('.gif');
const gif2 = document.querySelector('.gif2');
const gif3 = document.querySelector('.gif3');
const gif4 = document.querySelector('.gif4');
const questionIcon = document.querySelector('.fa-circle-question');
const messageBox = document.getElementById('messageBox');
const wrapperRect = wrapper.getBoundingClientRect();
const yesBtnRect = yesBtn.getBoundingClientRect();

const originalGifSrc = 'giphy.gif';
const newGifSrc = 'happy1.gif';
const originalGifSrc2 = 'giphy2.gif';
const newGifSrc2 = 'happy2.gif';
const newGifSrc3 = 'happy3.gif';
const newGifSrc4 = 'happy4.gif';

noBtn.addEventListener('click', () => {
    question.innerHTML = 'Thank you.😊😁';
    showMessageBox();
});

noBtn.addEventListener('click', () => {
    gif.src = newGifSrc;
    gif2.src = newGifSrc2;
    gif3.src = newGifSrc3;
    gif4.src = newGifSrc4;

    questionIcon.classList.remove('fa-circle-question');
    questionIcon.classList.add('fa-smile-beam');

    yesBtn.style.left = 'initial';
    yesBtn.style.top = 'initial';
});

yesBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - yesBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - yesBtnRect.height)) + 1;
    yesBtn.style.left = i + 'px';
    yesBtn.style.top = j + 'px';
});

function showMessageBox() {
    messageBox.style.display = 'block';
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 7000);
}
