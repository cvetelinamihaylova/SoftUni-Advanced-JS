function solve(){

    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    };
    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        addComment(comment){
            this.comments.push(comment);
        }
        toString(){
            let result = `${super.toString()}\nRating: ${this.likes - this.dislikes}` ;
            if(this.comments.length !== 0){
                result += '\nComments:';
                result += this.comments.reduce((acc, curr)=>{
                    acc += `\n * ${curr}`;
                    return acc;
                }, '')
            }
            return result;
        }
    };
    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            return `${super.toString()}\nViews: ${this.views}`
        }
    };

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
};
let classes = solve();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test)

'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n* 1\n* 2\n* 3'
'Post: TestTitle\nContent: TestContent\nRating: -5\nComments:\n * 1\n *...