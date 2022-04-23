
const container = document.querySelector('.container');

//Fetch Data with url provided in https://github.com/ASU-CIT/test-data
async function fetchData() {
    let response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
            let data = await response.json();
                display(data);
                console.log(data)
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
        const flex = document.createElement('div')
        const col1 = document.createElement('div');
        const col2 = document.createElement('div');
        const name = document.createElement('h3');
        const description = document.createElement('p');
        const img = document.createElement('img');
        const btnOrder = document.createElement('button');
        const productLink = document.createElement('a');
    
    
        //Assign the data in every element that created above to be displayed in HTML
        name.innerText =row.name;
        description.innerText = row.description;
        img.src = row.image_link;
        img.alt = row.name;
        productLink.href = row.product_link;
        productLink.innerText= 'Order Now'
        //Structure the layout 
        container.appendChild(flex);
        // btnOrder.appendChild(productLink);
        flex.appendChild(col1);
        flex.appendChild(col2);
        col1.appendChild(img);
        col2.appendChild(name);
        col2.appendChild(description);
        col2.appendChild(productLink);
        col1.classList ='product-img';
        col2.className ='title-description';
        flex.className = 'item-container';
    });
}

