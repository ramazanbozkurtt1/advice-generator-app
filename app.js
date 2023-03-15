const api_link = "https://api.adviceslip.com/advice";
const paragrafh = document.querySelector('.paragrafh');
const adviceId = document.querySelector('#advice-id');
const button = document.querySelector('.icon');
const fetchAdvice = async () => {
    const response =  await fetch(api_link);
    const advice = await response.json()
    const {slip} = advice
    adviceId.textContent = slip.id
    paragrafh.textContent = slip.advice
};

button.addEventListener('click',fetchAdvice);
