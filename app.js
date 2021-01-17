'use strict';

//creat constructor
function Product(name,src){
    this.productName=name;
    this.source=src;
    this.shown=0;
    this.votes=0;
    Product.prototype.allProducts.push(this);
}
//creat object for each image product
Product.prototype.allProducts=[];
console.log(Product.prototype.allProducts);
new Product('bag','images/bag.jpg');
new Product('banana','images/banana.jpg');
new Product('bathroom','images/bathroom.jpg');
new Product('boots','images/boots.jpg');
new Product('breakfast','images/breakfast.jpg');
new Product('bubblegum','images/bubblegum.jpg');
new Product('chair','images/chair.jpg');
new Product('cthulhu','images/cthulhu.jpg');
new Product('dog-duck','images/dog-duck.jpg');
new Product('dragon','images/dragon.jpg');
new Product('pen','images/pen.jpg');
new Product('pet-sweep','images/pet-sweep.jpg');
new Product('scissors','images/scissors.jpg');
new Product('shark','images/shark.jpg');
new Product('sweep','images/sweep.png');
new Product('tauntaun','images/tauntaun.jpg');
new Product('unicorn','images/unicorn.jpg');
new Product('usb','images/usb.gif');
new Product('water-can','images/water-can.jpg');
new Product('wine-glass','images/wine-glass.jpg');
console.log(Product.prototype.allProducts);

//Identify element
var firstProductImage=document.getElementById('firstProductImage');
var secondProductImage=document.getElementById('secondProductImage');
var thirdProductImage=document.getElementById('thirdProductImage');
var defaultMaxAttempts=25;
var AttemptsCounter=0;
renderThreeRandomImages();
console.log('befor',lastClick)


firstProductImage.addEventListener('click',UserClick);
secondProductImage.addEventListener('click',UserClick);
thirdProductImage.addEventListener('click',UserClick);

var firstProductImageIndex=0;
var secondProductImageIndex=0;
var thirdProductImageIndex=0;


function handleUserClick(event){
    userAttemptsCounter++;
  
    if(userAttemptsCounter <= maxAttempts){
      if(event.target.id === 'left-image'){
        GoatImage.prototype.allImages[leftImageIndex].votes++;
      } else {
        GoatImage.prototype.allImages[rightImageIndex].votes++;
      }
      renderTwoRandomImages();
  
    } else {
      // handle end of voting
      var resultsList = document.getElementById('results-list');
      var goatResult;
      for(var i = 0; i < GoatImage.prototype.allImages.length; i++){
        goatResult = document.createElement('li');
        goatResult.textContent = GoatImage.prototype.allImages[i].name + 'has '+ GoatImage.prototype.allImages[i].votes + ' votes';
        resultsList.appendChild(goatResult);
      }
      rightImageElement.removeEventListener('click',handleUserClick);
      leftImageElement.removeEventListener('click',handleUserClick);
  
    }
  
  }
  
  




function UserClick(event){
    AttemptsCounter++;
console.log('AttemptsCounter :',AttemptsCounter+"/"+defaultMaxAttempts)
if(AttemptsCounter <= defaultMaxAttempts){
    console.log(typeof (event.target.id));
    if(event.target.id === 'firstProductImage'){
        
            Product.prototype.allProducts[firstProductImageIndex].votes++;
        } 
        if(event.target.id === 'secondProductImage'){
            Product.prototype.allProducts[secondProductImageIndex].votes++;
        } 
        if(event.target.id === 'thirdProductImage'){
            Product.prototype.allProducts[thirdProductImageIndex].votes++;

        }      
     renderThreeRandomImages();      

    }
    

}
var lastClick=[0,0,0];

function renderThreeRandomImages(){
    firstProductImageIndex = generateRandomIndex();
  
    do{
        secondProductImageIndex = generateRandomIndex();
    } while( secondProductImageIndex=== firstProductImageIndex);

    do{
        thirdProductImageIndex = generateRandomIndex();
    } while( thirdProductImageIndex === firstProductImageIndex|| thirdProductImageIndex === secondProductImageIndex);
  
    console.log(firstProductImageIndex,secondProductImageIndex,thirdProductImageIndex);
    lastClick=[firstProductImageIndex,secondProductImageIndex,thirdProductImageIndex];
    


    console.log( Product.prototype.allProducts[firstProductImageIndex].source);
    firstProductImage.src= Product.prototype.allProducts[firstProductImageIndex].source;
    secondProductImage.src = Product.prototype.allProducts[secondProductImageIndex].source;
    thirdProductImage.src = Product.prototype.allProducts[thirdProductImageIndex].source;
    Product.prototype.allProducts[firstProductImageIndex].shown++;
    Product.prototype.allProducts[secondProductImageIndex].shown++;
    Product.prototype.allProducts[thirdProductImageIndex].shown++;

    
  }
  
  renderThreeRandomImages();
function generateRandomIndex(){
    return Math.floor(Math.random() * (Product.prototype.allProducts.length));
  }
