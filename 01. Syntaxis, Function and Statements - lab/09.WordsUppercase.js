function solve(text){
    const pattern = /\W+/g;

    const arrWords = text
    .split(pattern)
    .filter(l=>l!=='')
    .map(word=>{
        return word.toUpperCase();
    })
    .join(', ')

    return arrWords
}
