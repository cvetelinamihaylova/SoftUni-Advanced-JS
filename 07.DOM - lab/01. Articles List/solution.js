function createArticle() {
	const html = {
		titleInput: () => document.querySelector('#createTitle'),
		contentTextArea: () => document.querySelector('#createContent'),
		containerArticles: () => document.querySelector('#articles')
	}

	const newArticle = createElements('article');
	const h3 = createElements('h3');
	const p = createElements('p');
	newArticle.appendChild(h3);
	newArticle.appendChild(p);

	let textTitle = html.titleInput().value;
	let textArticle = html.contentTextArea().value;
	if (textTitle === '' || textArticle === '') { return; };

	h3.textContent = textTitle;
	p.textContent = textArticle;

	html.containerArticles().appendChild(newArticle);

	html.titleInput().value = '';
	html.contentTextArea().value = '';

	function createElements(element){
		return document.createElement(element);
	}
}