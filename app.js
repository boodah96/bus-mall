'use strict';

//creat constructor
function Product(name,src){
    this.productName=name;
    this.source=src;
    this.shown=0;
    this.votes=0;
    Product.prototype.allProducts.push(this);
   
}


var allProduct=[];
var allVotes=[];
var allShown=[];
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

  


//Identify element
var divImages=document.getElementById('divImages');
divImages.addEventListener('click',UserClick);

var maxAttempts=document.getElementById('maxAttempt');
maxAttempts.addEventListener('submit',userMaxAttempts);
function userMaxAttempts(event){

  event.preventDefault()

  console.log(event.target.rounds.value); 
  defaultMaxAttempts= event.target.rounds.value;
  


}

var finalResult=document.getElementById('result');
finalResult.addEventListener('submit',result);
function result(event){
  event.preventDefault();

    var resultsList = document.getElementById('results-list');
          var productResult;
          for(var i = 0; i < Product.prototype.allProducts.length; i++){
            productResult = document.createElement('li');
            productResult.textContent = Product.prototype.allProducts[i].productName + ' had '+  Product.prototype.allProducts[i].votes + ' votes'+'  and was seen '+ Product.prototype.allProducts[i].shown+' times.';
            resultsList.appendChild(productResult);
            allProduct[i]=Product.prototype.allProducts[i].productName ;
            allVotes[i]=Product.prototype.allProducts[i].votes;
            allShown[i]=Product.prototype.allProducts[i].shown;
            renderChart();
          }
          divImages.removeEventListener('click',UserClick);

    
 
}


var defaultMaxAttempts=25;
var AttemptsCounter=0;

renderThreeRandomImages();





var firstProductImageIndex=0;
var secondProductImageIndex=0;
var thirdProductImageIndex=0;
  
function UserClick(event){
    

console.log('AttemptsCounter :',AttemptsCounter+"/"+defaultMaxAttempts)
AttemptsCounter++;   

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
            
            Product.prototype.allProducts[firstProductImageIndex].shown++;
    Product.prototype.allProducts[secondProductImageIndex].shown++;
    Product.prototype.allProducts[thirdProductImageIndex].shown++;

        }      
     renderThreeRandomImages(); 
    
    }
    

}

var lastRoundFirst=-3;
var lastRoundSecond=-2;
var lastRoundThird=-1;
function renderThreeRandomImages(){
    var lastClick=[lastRoundFirst,lastRoundSecond,lastRoundThird];
    do{
        firstProductImageIndex = generateRandomIndex();
    } while( lastClick.includes(firstProductImageIndex));
    lastRoundFirst=firstProductImageIndex;
    lastClick.push(firstProductImageIndex);
  
    do{
        secondProductImageIndex = generateRandomIndex();
    } while( lastClick.includes(secondProductImageIndex));
    lastRoundSecond=secondProductImageIndex;
    lastClick.push(secondProductImageIndex);


    do{
        thirdProductImageIndex = generateRandomIndex();
    } while(lastClick.includes(thirdProductImageIndex));
    lastRoundThird=thirdProductImageIndex;

  
    

    console.log( Product.prototype.allProducts[firstProductImageIndex].source);
    firstProductImage.src= Product.prototype.allProducts[firstProductImageIndex].source;
    secondProductImage.src = Product.prototype.allProducts[secondProductImageIndex].source;
    thirdProductImage.src = Product.prototype.allProducts[thirdProductImageIndex].source;
   
    
  }

  renderThreeRandomImages();
function generateRandomIndex(){
    return Math.floor(Math.random() * (Product.prototype.allProducts.length));
  }

function renderChart(){
  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: allProduct,
        datasets: [{
            label: '# of Votes',
            data: allVotes,
            backgroundColor: [
               'rgba(99, 99, 0, 0.2)'
               
            ],
            borderColor: [
                
                
            ],
            borderWidth: 1
        },{
            label: '# of views',
            data: allShown,
            backgroundColor: 
               'green'
               
            ,
            borderColor: [
                
                
            ],
            borderWidth: 1
        }
    
    
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        }
    }
});
myChart.canvas.parentNode.style.width = '600px';
    myChart.canvas.parentNode.style.height = '20px';

}