const wrapper=document.querySelector('.wrapper');
const registerLink=document.querySelector('.register-link');
const loginLink=document.querySelector('.login-link');
const btnPopup=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');

registerLink.onclick = () =>{
    wrapper.classList.add('active');
};
loginLink.onclick = () =>{
    wrapper.classList.remove('active');
};
btnPopup.onclick = () =>{
    wrapper.classList.add('active-popup');
};
iconClose.onclick = () =>{
    wrapper.classList.remove('active-popup');
};

const textToType = "Justice delayed is justice denied";
        const typingSpeed = 100; // Adjust typing speed (in milliseconds)

        let charIndex = 0;
        const typedTextElement = document.getElementById("typed-text");
        const cursorElement = document.getElementById("cursor");

        function typeCharacter() {
            if (charIndex < textToType.length) {
                typedTextElement.innerHTML += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, typingSpeed);
            } else {
                cursorElement.style.display = "none";
            }
        }

        // Start the typing effect
        typeCharacter();
