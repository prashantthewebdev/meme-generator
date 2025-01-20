const memeTitle =document.querySelector('.meme-title');
const memeImage =document.querySelector('.meme-image');
const authorOutput =document.querySelector('.author span');
const generateBtn = document.getElementById('generate-button');

function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
        const {author, title, url} = data
        memeTitle.innerText = title
        memeImage.src = url
        authorOutput.innerText =author
    })
}

getMeme()

generateBtn.addEventListener('click', ()=> {
  getMeme()
})