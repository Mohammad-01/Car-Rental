"use strict"

let myForm = document.getElementById ('myForm');
let tableEl = document.getElementById ('table');
let info = [];

function CarTybe (CustomerName, CarModel, CarPrice){

    this.CustomerName = CustomerName;
    this.CarModel = CarModel;
    this.CarPrice = CarPrice;

    info.push(this);
    saveToLocalStorage();
}

myForm.addEventListener('submit', addCar)
     function addCar(event){
         event.preventDefault();

         let CustomerName = event.target.CustomerName.value;
         let CarModel = event.target.CarModel.value;
         let CarPrice = event.target.CarPrice.value;
         
         let car = new CarTybe (CustomerName, CarModel, CarPrice);
         car.render();

         console.log(info);
     } 
     
     

     CarTybe.prototype.render = function () {
      
        let tre1 = document.createElement('tr');
        tableEl.appendChild(tre1);
    
        let tdEl2 = document.createElement('td');
        tre1.appendChild(tdEl2);
        tdEl2.textContent = this.CustomerName;

        let tdEl3 = document.createElement('td');
        tre1.appendChild(tdEl3);
        tdEl3.textContent = this.CarModel;

        let tdEl4 = document.createElement('td');
        tre1.appendChild(tdEl4);
        tdEl4.textContent = this.CarPrice;
    
     }

    function createTableHeader(){
    
        let tre1 = document.createElement('tr');
        tableEl.appendChild(tre1);

        let tdEl2 = document.createElement('th');
        tre1.appendChild(tdEl2);
        tdEl2.textContent = 'Order Image';

        let tdEl3 = document.createElement('th');
        tre1.appendChild(tdEl3);
        tdEl3.textContent = 'Order Details';
    
    }

    createTableHeader();
    
    function saveToLocalStorage() {
        let data = JSON.stringify(info);
        localStorage.setItem('information',data);
    }

    function readFromLocalStorage() {
        let stringObj = localStorage.getItem('information');
        let normalObj = JSON.parse(stringObj);

        if (normalObj){
            for (let i = 0 ; i > normalObj.length ;i++) {
                new CarTybe (normalObj[i].CustomerName,normalObj[i].CarModel,normalObj[i].CarPrice);
                info[i].render();
            }
        console.log(normalObj);
        }
    }

    readFromLocalStorage();

    let min = 1000;
    let max = 10000;
    function getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    
    function remove() {
        document.getElementById("td").remove();
    }