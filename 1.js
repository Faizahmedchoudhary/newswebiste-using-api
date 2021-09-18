console.log("Javascript")

tesla = document.getElementById('tesla');
datalist = document.getElementById('datalist');
tesla.addEventListener("click" , tesladata)

// tesla artcicle 
function tesladata()  {
    const xhr = new XMLHttpRequest;
    xhr.open("GET" , "https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=d093053d72bc40248998159804e0e67d", true)
    
    // onload function
    xhr.onload = function () {
       const data = document.getElementById('image-data');
        if (this.status === 200) {
            json = JSON.parse(this.responseText);
            console.log(json);
            articles = json.articles;
            console.log(articles);

            articles.forEach(element => {
                console.log(element)
                const indiadata = document.createElement('div');
                indiadata.classList.add('indiadata');

                indiadata.innerHTML  += `
                <li><a href = "${element.url}" >${element.title} </a> </li>
                `

               data.appendChild(indiadata)
            });
        }
        else{
            console.log("unsupported")
        };


    }

    xhr.send()

}
