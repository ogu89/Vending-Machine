

class Product{
    constructor(productNo, name, price, img){
        this.productNo = productNo;
        this.name = name;
        this.price = price;
        this.img = img;
    }
};

const products = [
    new Product("1", "Coke", "$3", "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2917&q=80"),
    new Product("2", "Canada Dry", "$2.5", "https://images.unsplash.com/photo-1615306119247-67565da835da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("3", "Coffee", "$4", "https://images.unsplash.com/photo-1533087355953-a4a88874bd1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80"),
    new Product("4", "Watch", "$300", "https://images.unsplash.com/photo-1541351991055-b55135fea4bf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("5", "Headphone", "$100", "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("6", "Orange juice", "$4", "https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"),
    new Product("7", "Fragrance", "$200", "https://images.unsplash.com/photo-1541643600914-78b084683601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3QlMjB2ZW5kaW5nJTIwbWFjaGluZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("8", "Air pods", "$150", "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3QlMjB2ZW5kaW5nJTIwbWFjaGluZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("9", "Tabasco", "$4.5", "https://images.unsplash.com/photo-1519666213631-be6e024eac6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"),
    new Product("11", "Sunglasses", "$100", "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"),
    new Product("12", "Suede shoes", "$250", "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"),
    new Product("13", "House plant", "$20", "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"),
    new Product("14", "Camera", "$400", "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("15", "Lipstick", "$50", "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("16", "Ginger beer", "$5","https://images.unsplash.com/photo-1552879948-16c32e175ae5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("17", "Coke Zero", "$3", "https://images.unsplash.com/photo-1596803244535-925769f389fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"), 
    new Product("18", "Ice cream", "$10", "https://images.unsplash.com/photo-1597614506902-2e35ab724713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=664&q=80"),
    new Product("19", "Sandal", "$150", "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU5fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"),
    new Product("21", "Red Bull", "$4", "https://images.unsplash.com/photo-1570526427001-9d80d114054d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"), 
    new Product("22", "Corona Beer", "$5", "https://images.unsplash.com/photo-1604752222457-749528abd25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1614&q=80")
];



let content = 
`
<div class="bg-lightblue  vh-100 d-flex align-items-center justify-content-center flex-wrap">
    <div class="container row w-100 " >
        <div class="col-7 col-sm-7 col-md-8 d-flex flex-wrap  ">
            <div id="sliderTarget" class="bg-secondary col-12 d-flex  align-items-center justify-content-center mb-1">
                <div class=" slider-data d-none col-12">
`;
products.map(product => {
    content +=
        `               
                        <img src="${product.img}" class="img-fluid slider-item">
                          
`;
});




content +=
`                
                </div>
            
            
            </div>
            <div class="col-12 d-flex justify-content-center mb-2">
                <button id="targetBtn" class="btn btn-sm  btn-block btn-secondary" >PUSH</button>
            </div>
            
            

            
        </div>
        


        <div class="col-5 col-sm-5 col-md-4  ">
            <div class="bg-secondary col-12 d-flex align-items-center justify-content-start mb-1 pr-4 flex-wrap ">
                <div class="bg-danger col-sm-4 col-12 text-center mt-2 ">
                    <h4 id="displayNum" class="pr-2">No</h4>
                </div>
                <div class="col-sm-8 col-12 mt-2">
                    <h5 id="name" class="mt-2">Name</h5>
                    <h5 id="price">Price</h5>
                </div>
            </div>

            <div class="bg-secondary col-12 d-flex flex-wrap justify-content-between">
`;
for(let i = 1; i < 10; i++){
    content +=
    `
                    <div class="col-sm-4 col-6 d-flex justify-content-center align-items-center mt-1 p-2">
                        <div id="button${i}" class=" px-3  small  bg-primary d-flex align-items-center justify-content-center">
                            <p class="text-white ">${i}</p>
                        </div>
                    </div>

    `;
}
content +=
`
            </div>
        </div>

    </div>
</div>
`;

    
const target = document.getElementById("target");
target.innerHTML += content;



// Creating buttons

let displayNum = document.getElementById("displayNum")
let name = document.getElementById("name");
let price = document.getElementById("price")

for(let i = 1; i < 10; i++){
    let button = document.getElementById("button" + i.toString());
    button.addEventListener("click", function(){
        if(Number(displayNum.innerHTML + i.toString()) > products[products.length-1].productNo || displayNum.innerHTML === "No") displayNum.innerHTML =i.toString();
        else displayNum.innerHTML += i.toString();
        displayProduct()
        slideJump(Number(displayNum.innerHTML));
    })
}

document.getElementById("targetBtn").addEventListener("click", function(){
    if(name.innerHTML != "No") alert("You got a " + name.innerHTML);
});





//Displaying product name and price
function displayProduct(){
    let currProduct = products.find(object => object.productNo === displayNum.innerHTML);

    name.innerHTML = currProduct.name;
    price.innerHTML = currProduct.price;
}

//creating slider
let sliderItems = document.querySelectorAll("#sliderTarget .slider-data .slider-item");

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-9","bg-dark", "container", "d-flex", "flex-nowrap", "overflow-hiddens", "justify-content-center", "h-230", "py-2");
main.classList.add("main", "full-width", "d-flex", "justify-content-center");
extra.classList.add("extra", "full-width","d-flex", "justify-content-center");

let sentence = document.createElement("h5");
sentence.innerHTML += "Click the buttons between 1 and 22"
sentence.classList.add("text-white","d-flex",  "align-items-center")
let flag = true;

main.append(sentence);

sliderShow.append(main);
sliderShow.append(extra);
sliderTarget.append(sliderShow);


//Setting animation direction, current slider index and next slider index  
main.setAttribute("data-index", "0");
function slideJump(inputValue){

    let index = Number(main.getAttribute("data-index"));
    let goalIndex = indexCalculator(inputValue);
    let animationType = decideAnimationType(goalIndex, index);

    let currentElement = sliderItems[index];

    let nextElement = sliderItems[goalIndex];
                                                
    main.setAttribute("data-index", goalIndex.toString());

    if(flag == true) animateMain(sentence, nextElement, animationType);
    else if(index != goalIndex) animateMain(currentElement, nextElement, animationType);
    flag = false;

}

// Right or Left
function decideAnimationType(goalIndex, index){
    let middle =  Math.floor(sliderItems.length / 2);
    middle = middle > index ? index + middle  : index - middle;
    
    for(let i = 1; i <= Math.floor(sliderItems.length / 2); i++){
        if(index == goalIndex)return "right";
        index += 1;
        if(index >= sliderItems.length) index = 0;
    }
    return "left"
}


//Searching the target of product index

function indexCalculator(number){
    /*
    for(let i = 0; i < products.length; i++){
        if( products[i].productNo == number) return i;
    }
    */
    let currProduct = products.find(object => object.productNo === displayNum.innerHTML);
    return products.indexOf(currProduct);
}




//Making slider works
function animateMain(currentElement, nextElement, animationType){
    main.innerHTML = "";
    main.append(nextElement);

    extra.innerHTML = "";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");

    if(animationType === "right"){
        sliderShow.innerHTML = "";
        sliderShow.append(extra);
        sliderShow.append(main);
    }else if(animationType === "left"){
        sliderShow.innerHTML = "";
        sliderShow.append(main);
        sliderShow.append(extra);
    }
}
