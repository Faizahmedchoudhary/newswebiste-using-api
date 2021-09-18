
// 2 nasa mass rover images
const nasa = document.getElementById("nasa")
const data = document.getElementById("image-data")
nasa.addEventListener("click" , nasadata)
function nasadata()  {
    event.preventDefault()
    console.log("clicked on nasa.html")
    const xhr = new XMLHttpRequest;
    xhr.open("GET" , "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wEYQJTivbnF7MScBPf4bcyGXFbJeRtcZ1h0d5jJx", true)

    // onload function
    xhr.onload = function () {
        let html = "";
        if (this.status === 200 )
         {
            json = JSON.parse(this.responseText)
            console.log(json)
            img = json.photos
            console.log(img)

            img.forEach(element => {
                console.log(element)
                const image = document.createElement('div')
                image.classList.add('image')
                image.innerHTML += `
                <div class="single-image">
                <img src="${element.img_src}" alt="${element.title}">               
                </div>`
               data.appendChild(image)

        })
        }
         else {
            console.log("unsupported")
        }

    }
        xhr.send()
    }
       