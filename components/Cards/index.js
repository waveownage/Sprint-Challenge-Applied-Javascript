// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
  const newArrayJs = response.data.articles.javascript;
  console.log(newArrayJs);
  newArrayJs.forEach((curr) => {
    console.log(curr);
    newJs = cardComponent(curr);
    cardContainer.appendChild(newJs);
  });
  const newArrayBS = response.data.articles.bootstrap;
  const newArrayTech = response.data.articles.technology;
  const newArrayJq = response.data.articles.jquery;
  const newArrayNode = response.data.articles.node;

  console.log(newArrayJs);
  
})
.catch(err => {
  console.log('ERROR')
})


const cardComponent = (object) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardHeadline = document.createElement('div');
  cardHeadline.classList.add('headline');
  cardHeadline.textContent = object.headline;

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const imgCard = document.createElement('img');
  imgCard.scr = object.authorPhoto;

  const nameAuthor = document.createElement('span');
  nameAuthor.textContent = `By ${object.authorName}`;

  card.appendChild(cardHeadline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(nameAuthor);
  imgContainer.appendChild(imgCard);

  return card;
  
};

const cardContainer = document.querySelector('.cards-container');