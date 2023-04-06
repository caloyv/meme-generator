const meme = document.querySelector("#btn-1");
const joke = document.querySelector("#btn-2");
const quote = document.querySelector("#btn-3");
const riddle = document.querySelector("#btn-4");
const riddleAnswer = document.querySelector("#btn-5");

function showMeme() {
  let clickCounter = 0;
  let randomNum1 = Math.floor(Math.random() * 10);
  let img = document.createElement("img");
  img.src = `img/meme${randomNum1}.jpg`;

  // img.setAttribute("id", "imageID");
  img.setAttribute("style", "width: 50%");

  const imgAttr = img.getAttribute("src");

  const jokeID = document.querySelector("#joke");
  const parent = document.querySelector("#left-section");

  parent.insertBefore(img, jokeID);

  meme.addEventListener("click", function () {
    clickCounter++;
    if (clickCounter == 1) {
      img.remove();
    }
  });

  joke.addEventListener("click", function () {
    img.remove();
  });

  quote.addEventListener("click", function () {
    img.remove();
  });

  riddle.addEventListener("click", function () {
    img.remove();
  });

  console.log(imgAttr);
}

function tellJoke() {
  const jokes = [
    " - What is brown and sticky? A stick.",
    " - I'm afraid for the calendar. Its days are numbered.",
    ' - What did the ocean say to the beach? Nothing, it just waved.',
  ];
  let clickCounter = 0;
  let randomNum2 = Math.floor(Math.random() * jokes.length);
  const createJoke = document.createElement("p");

  
  createJoke.textContent = jokes[randomNum2];

  createJoke.setAttribute('style','padding-left: 10px; font-weight: 400; font-size: 0.95rem')

  const quoteID = document.querySelector("#quote");
  const parent = document.querySelector("#left-section");

  parent.insertBefore(createJoke, quoteID);

  console.log(randomNum2);

  joke.addEventListener("click", function () {
    clickCounter++;
    if (clickCounter == 1) {
      createJoke.remove();
    }
  });

  meme.addEventListener("click", function () {
    createJoke.remove();
  });

  quote.addEventListener("click", function () {
    createJoke.remove();
  });
  riddle.addEventListener("click", function () {
    createJoke.remove();
  });
}

function tellQuote() {
  let randomNum2 = Math.floor(Math.random() * 3);
  const createQuote = document.createElement("p");
  const createAuthor = document.createElement('p');

  const quotes = [
    {quote: '"Everything\'s got to end sometimes, otherwise nothing would ever get started"',
     author: "- The Doctor"},
    {quote: '"Anger is the ultimate destroyer of your own peace of mind"',
     author: '- Dalai Lama'},
    {quote: '"Emotional empathy is what motivates us to help others"',
     author: '- Brian Goldman'}
  ]
  createQuote.textContent = quotes[randomNum2].quote;
  createAuthor.textContent = quotes[randomNum2].author;

  createQuote.setAttribute('style','padding-left: 10px; font-weight: 400; font-size: 0.95rem')
  createAuthor.setAttribute('style','padding-left: 20px; font-weight: 400; font-size: 0.95rem')

  const quoteParent = document.querySelector("#quote-container");
  const authorParent = document.querySelector("#author-container");
  
  

  const quoteElement = quoteParent.querySelector('p');

  if(quoteElement){
    quoteParent.innerHTML = '';
    authorParent.innerHTML = '';
  }

  quoteParent.appendChild(createQuote);
  authorParent.appendChild(createAuthor);

  meme.addEventListener("click", function () {
    createQuote.remove();
    createAuthor.remove();
  });

  joke.addEventListener("click", function () {
    createQuote.remove();
    createAuthor.remove();
  });

  riddle.addEventListener("click", function () {
    createQuote.remove();
    createAuthor.remove();
  });
}

function tellRiddle() {
  const riddles = [
    {question: 'The more you take, the more you leave behind. What am I?', answer: '- Footsteps'},
    {question: 'What is more useful when it is broken?', answer: '- An egg'},
    {question: 'I am easy to lift, but hard to throw. What am I?', answer: '- A feather'}
  ];

  let randomNum2 = Math.floor(Math.random() * 3);
  const createRiddle = document.createElement("p");
  const answerRiddle = document.createElement("p");

  createRiddle.textContent = riddles[randomNum2].question
  answerRiddle.textContent = riddles[randomNum2].answer

  createRiddle.setAttribute('style','padding-left: 10px; font-weight: 400; font-size: 0.95rem');
  answerRiddle.setAttribute('style', 'display: none; ');

  const questionParent = document.querySelector("#riddle-question");
  const answerParent = document.querySelector("#riddle-answer");

  const question = questionParent.querySelector('p');

  if(question){
    questionParent.innerHTML = ''; // removes the content of the child
    answerParent.innerHTML = '';
    
  }
    questionParent.appendChild(createRiddle);
    answerParent.appendChild(answerRiddle);
 
  console.log(createRiddle)

  meme.addEventListener("click", function () {
    createRiddle.remove();
    answerRiddle.remove();
  });

  joke.addEventListener("click", function () {
    createRiddle.remove();
    answerRiddle.remove();
  });
  quote.addEventListener("click", function () {
    createRiddle.remove();
    answerRiddle.remove();
  });


  
}

function showAnswer(){
  const riddleParent = document.querySelector('#riddle-question');
  const riddleQuestion = riddleParent.querySelector('p');
  const answerParent = document.querySelector('#riddle-answer')
  const answerRiddle = answerParent.querySelector('p')
  if(riddleQuestion){
    answerRiddle.setAttribute('style', 'display: block; padding-left: 20px; font-weight: 400;');
  }else{
    alert('There is no question!')
  }
}

riddleAnswer.onclick = showAnswer;
riddle.onclick = tellRiddle;
quote.onclick = tellQuote;
meme.onclick = showMeme;
joke.onclick = tellJoke;
