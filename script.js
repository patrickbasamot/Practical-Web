
const container = document.querySelector('.container');

//Fetch Data with url provided in https://github.com/ASU-CIT/test-data
async function fetchData() {
    let response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
            let data = await response.json();
                display(data);
        }

        

//Call the function fetchData    
fetchData().catch(error =>{
    console.error(error);
});


function display(data){

            //Using for loop

    // for(let i=0; i<data.length; i++){

    //     //Create new element in every loop
    //     const div = document.createElement('div')
    //     const name = document.createElement('h3');
    //     const description = document.createElement('p');
    //     const img = document.createElement('img');
    //     const productLink = document.createElement('a');
 
    //     //Assign the data in every element that created above to be displayed in HTML

    //     name.innerText =data[i].name;
    //     description.innerText = data[i].description;
    //     img.src = data[i].image_link;
    //     img.alt = data[i].name;
    //     productLink.href = data[i].product_link;
    //     productLink.innerText = 'Product Page';

    //      //Structure the layout 

    //     container.appendChild(div);
    //     div.appendChild(img);
    //     div.appendChild(name);
    //     div.appendChild(productLink);
    //     div.appendChild(description);
    
    // }


    //Using forEach loop

    data.forEach(row => {

        //Create new element in every loop
        const div = document.createElement('div')
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const img = document.createElement('img');
        const productLink = document.createElement('a');
    
    
        //Assign the data in every element that created above to be displayed in HTML
        name.innerText =row.name;
        description.innerText = row.description;
        img.src = row.image_link;
        img.alt = row.name;
        productLink.href = row.product_link;
        productLink.innerText = 'Product Page';

        //Structure the layout 
        container.appendChild(div);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(productLink);
        div.appendChild(description);
        div.className = 'item-container';
    });
}

