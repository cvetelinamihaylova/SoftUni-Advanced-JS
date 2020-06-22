function getArticleGenerator(articles){
    
    const contentContainer = document.querySelector('#content');

    function showNext(){
        const article = document.createElement('article');
        article.textContent = articles.shift();
        if(article.textContent !== ''){

            contentContainer.appendChild(article)
        }
    };

    return showNext;
}