'use strict';
const allEmployee=[];
let ID=1000;
// constructor function
function Employee (fullName,department,Level,imageURL) {
    this.employeeID = ++ID,
    this.fullName=fullName,
    this.department=department,
    this.Level=Level,
    this.imageURL=imageURL,
    this.salary= function(){
        if(this.Level=='Senior'){
            let sl=getRandomInt(1500,2000);
            let net=sl-(sl*7.5)/100;
            return net;
        }else if(this.Level=='Mid-Senior'){
            let sl= getRandomInt(1000,1500);
            let net=sl-(sl*7.5)/100;
            return net;
        }else if(this.Level=='Junior'){
            let sl= getRandomInt(500,1000);
            let  net=sl-(sl*7.5)/100;
            return net;
        }
    }

    allEmployee.push(this);

}
Employee.prototype.renderEmp= function(){
    
    document.write(`<h3>Employee name:   ${this.fullName}  </h3>`);
    document.write(`<h3>Department:   ${this.department}  </h3>`);
    document.write(`<h3>Employee Salary:   ${this.salary()}  </h3>`);
    document.write("<br>");

}


let employee1= new Employee("Ghazi Samer" ,"Administration","Senior","./assets/ersonal.svg.png" );
let employee2= new Employee("Lana Ali" ,"Finance","Senior","./assets/Personal-loan.png" );
let employee3= new Employee("Tamara Ayoub" ,"Marketing","Senior","./assets/ersonal.svg.png" );
let employee4= new Employee("Safi Walid" ,"Administration","Mid-Senior","./assets/Personal-loan.png" );
let employee5= new Employee("Omar Zaid" ,"Development","Senior","./assets/ersonal.svg.png" );
let employee6= new Employee("Rana Saleh" ,"Development","Junior","./assets/ersonal.svg.png" );
let employee7= new Employee("Hadi Ahmad" ,"Finance","Mid-Senior","./assets/Personal-loan.png" );

for(let i=0;i<allEmployee.length;i++){
    allEmployee[i].renderEmp();
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

  console.log(employee.employeeID);
  console.log(employee2.employeeID);
  console.log(employee3.employeeID);
  console.log(employee4.employeeID);
  console.log(employee5.employeeID);
  console.log(employee6.employeeID);
  console.log(employee7.employeeID);
  