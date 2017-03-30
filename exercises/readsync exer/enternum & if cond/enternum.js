var ask = require('readline-sync');  
var arr = [];
var a = ask.question('enter first num: ');
var b = ask.question('enter second num: ');
var c = ask.question('enter third num: ');

if (a>b && a>c)  
{  
        if (b>c)  
        {  
            arr.push(c,b,a);  
        }  
        else  
        {  
            arr.push(b,c,a);  
        }  
}  
else if (b>a && b>c)  
{  
        if (a>c)  
        {  
             arr.push(c,a,b);  
        }  
        else  
        {  
             arr.push(a,c,b);  
        }  
}  
else if (c>a && c>b)  
{  
        if (a>b)  
        {  
            arr.push(b,a,c);  
        }  
        else  
        {  
            arr.push(a,b,c);  
        }  
};
console.log(arr);







/*arr.push(a,b,c);
console.log(arr.sort(function(a,b){return a-b;}))*/