// KAQKkIWAaDPclqrX1HEteaMurIaogZG3

// past day
// https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=KAQKkIWAaDPclqrX1HEteaMurIaogZG3

// past 30 days
// https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=KAQKkIWAaDPclqrX1HEteaMurIaogZG3 


let url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=KAQKkIWAaDPclqrX1HEteaMurIaogZG3';

let headlines = document.getElementById("headlines");


fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
        
data.results.map(article => {

    console.log(article.title);

    let a = document.createElement("a");
    a.setAttribute('href', article.url);
    a.innerHTML = article.title;

    let p = document.createElement('p');
    p.innerHTML = article.abstract;

    headlines.appendChild(a);
    headlines.appendChild(p);

})


})
