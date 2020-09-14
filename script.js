const button = document.getElementById('button');

function tellMe(joke) {
  console.log('tell me : ', joke);
  const speech = new SpeechSynthesisUtterance();
  speech.lang = 'en-US';
  speech.text = joke;
  window.speechSynthesis.speak(speech);
}

async function getJokes() {
  try {
    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single';
    const response = await fetch(apiUrl);
    const data = await response.json();
    tellMe(data.joke);
  } catch (error) {
    console.error('API sending error : ', error);
  }
}

button.addEventListener('click', () => {
  button.disabled = true;
  getJokes();
  setTimeout(() => {
    button.disabled = false;
  }, 9000);
});

