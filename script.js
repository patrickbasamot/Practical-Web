
const title = document.querySelector('.Title');
const container = document.querySelector('.container');


async function fetchText() {
    let response = await fetch('https://raw.githubusercontent.com/ASU-CIT/test-data/main/makeup.json');
            let data = await response.json();
          
                show(data);
        }

        

     
fetchText();
// title.innerText = 'qwewqe'

function show(data){

    for(let i=0; i<data.length; i++){
       const name = document.createElement('h3');
       const description = document.createElement('p');
       const img = document.createElement('img');

       name.innerText =data[i].name;
       description.innerText = data[i].description;
        img.src = data[i].image_link;
        container.appendChild(img);
       container.appendChild(name);
        container.appendChild(description);
       

    }
}

