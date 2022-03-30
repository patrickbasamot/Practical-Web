
const container = document.querySelector('.container');


async function fetchData() {
    let response = await fetch('https://raw.githubusercontent.com/ASU-CIT/test-data/main/makeup.json');
            let data = await response.json();
                display(data);
        }

        

//Call the function fetchData    
fetchData();


function display(data){

    for(let i=0; i<data.length; i++){
        //Create new element in every loop

        const div = document.createElement('div')
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const img = document.createElement('img');
 
        //Assign the data in every element that created above to be displayed in HTML
        name.innerText =data[i].name;
        description.innerText = data[i].description;
         img.src = data[i].image_link;
 
         //Structure the layout 
         container.appendChild(div);
         div.appendChild(img);
        div.appendChild(name);
         div.appendChild(description);
    }
}

