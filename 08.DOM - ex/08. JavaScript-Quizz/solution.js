function solve() {
  const quizzie = document.getElementById('quizzie');
  const sections = document.getElementsByTagName('section');
  const result = document.querySelector('.results-inner h1');
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let userAnswers = 0;
  let currStep = 0;
  quizzie.addEventListener('click', handler)
  function handler(a) {
    if (a.target.className === 'answer-text') {
      const text = a.target.textContent;
      sections[currStep].style.display = 'none';
      currStep++;
      if (currStep < correctAnswers.length) {
        sections[currStep].style.display = 'block';
      }

      if (correctAnswers.some(answer => answer === text)) {
        userAnswers++
      }
      if (currStep >= correctAnswers.length) {
        quizzie.removeEventListener('click', handler)
        document.querySelector('#results').style.display = 'block';
        result.innerHTML = userAnswers === correctAnswers.length 
        ? "You are recognized as top JavaScript fan!" 
        : `You have ${userAnswers} right answers`
      }

    }
  }
}
