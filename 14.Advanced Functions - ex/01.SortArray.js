function sortFunc(array, criteria){
    if(criteria === 'asc'){

        return array.sort((a, b)=> a- b);
    }else if(criteria === 'desc'){
        return array.sort((a, b)=> b - a);
    }else{
        throw new Error('Invalid criteria!')
    }
};

console.log(sortFunc([14, 7, 17, 6, 8], 'asc'))