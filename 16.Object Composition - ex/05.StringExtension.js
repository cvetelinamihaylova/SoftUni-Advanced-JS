(function(){
    String.prototype.ensureStart = function (str){
        if(!this.startsWith(str)){
            return `${str}${this}`;
        }
    
        return this.toString();
    };
    String.prototype.ensureEnd = function(str){
        if(!this.endsWith(str)){
            return `${this}${str}`;
        }
    
        return this.toString();
    };
    String.prototype.isEmpty = function(){
        return this.toString()===''
    };
    
    String.prototype.truncate = function(n){
    if(n < 4){
        return '.'.repeat(n);
    };
    if(n >= this.length){
        return this.toString();
    }else{
        //let index = this.lastIndexOf(' ');
        let index = this.substr(0, n-2).lastIndexOf(' ');
        if(index > -1){
            //return this.substring(0, index) + '...';
            return this.substr(0, index).toString() + '...';
    
        }else{
            return this.substring(0, n-3) + '...'
        }
    }
    }
    String.format = function(string, ...params){
        params.forEach((el, i)=>{
            string = string.replace(`{${i}}`, el);
        })
    return string;
    }
}())