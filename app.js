    document.addEventListener("DOMContentLoaded", () => {
    
        const images = document.querySelectorAll("img");

        for(image of images) {
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(respnse => response.json())
            .then(data=> image.src = data.message)
        }
        
    })