const container = document.querySelector('.container');
let input = document.querySelector('.search');
const sorter = document.querySelector('.sort');
const load = document.querySelector('.load');
let productName = [];
let index = [];

//Fetch Data with APIs provided in https://github.com/ASU-CIT/test-data and  https://github.com/ASU-CIT/practical-2022
const urlTest = 'https://raw.githubusercontent.com/ASU-CIT/test-data/main/makeup.json';
const urlLargerData = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';


async function fetchData() {
            load.style.display='block'
             let response = await fetch(urlLargerData);
             let data = await response.json();
            load.style.display='none'
                //Create Functions
                display(data);
                search();
}

        

//Call the function fetchData    
fetchData().catch(error =>{
    console.error(error);
});


function display(data){


   


    //Using forEach loop
    data.forEach(row => {

        //Create new element for each data

        const flex = document.createElement('div')
        const col1 = document.createElement('div');
        const col2 = document.createElement('div');
        const productTitle = document.createElement('h3');
        const itemDescription = document.createElement('p');
        const img = document.createElement('img');
        const productPrice = document.createElement('h4');
        const modal = document.createElement('dialog');
        const productLink = document.createElement('a');
         
        //Get the data from API to be displayed in the web page. 
        const {name, description, image_link, product_link, price} = row;

        
        productName.push(productTitle);
        index.push(flex);

        //Assign the data in every element that created above to be displayed in our Web page 
        productTitle.textContent = name;
        img.alt = name;
        img.src = image_link;
        productLink.href = product_link;
        productPrice.textContent = `$${price}`
        itemDescription.textContent = description;
        productLink.textContent= 'Check Product'

        
    
        //Structure the layout into the DOM
        container.appendChild(flex);
        flex.appendChild(col1);
        col1.appendChild(img);

        flex.appendChild(col2);
        col2.appendChild(productTitle);
        col2.appendChild(productPrice);
        col2.appendChild(productLink);
        
         //Modal
         col1.appendChild(modal);
         modal.appendChild(itemDescription);

        //Assign classNames for CSS Styling
        img.className = 'img'
        col1.className ='product-img';
        col2.className ='title-description';
        flex.className = 'item-container';
        productTitle.className = 'title-header';

       


        //Onclick function each image for production description 
        img.addEventListener('click', () =>{
         modal.showModal();
         
        })
        modal.addEventListener('click', () =>{
            var rect = modal.getBoundingClientRect();
            var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
              && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                modal.close();
            }
        })
    });
}



function search(){
    input.addEventListener('input',() =>{
     for(let i=0; i<productName.length; i++){
        if(!productName[i].innerText.includes(input.value) && !productName[i].innerText.toLowerCase().includes(input.value) ){
            index[i].style.display ='none';

        }  else {
            index[i].style.display="flex";                 
        }
        
     }

    });
}

// function sort(){
//     sorter.addEventListener('click', ()=>{
//         prices.sort((a,b) => a > b?1:-1);
//         console.log(prices);
//     })
// }