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
    
    let main=document.getElementsByTagName("main")[0];
    let div=document.createElement("div");
    main.appendChild(div);

    let img=document.createElement("img");
    img.src=this.imageURL;
    div.appendChild(img);

    let name=document.createElement("h5");
    name.textContent=`Name: ${this.fullName} - ID: ${this.employeeID}`;
    div.appendChild(name);

    let dep=document.createElement("h5");
    dep.textContent=`Department: ${this.department} - Level: ${this.Level}`;
    div.appendChild(dep);

    let salary=document.createElement("h5");
    salary.textContent=`Salary: ${this.salary()}`;
    div.appendChild(salary);


    div.style.backgroundColor = "#477d57";
    div.style.color="white";
    div.style.margin="10px";
    div.style.width="350px";
    div.style.height="400px";
    main.style.display ="flex";
    main.style.flexWrap="wrap";
    div.style.textAlign="center";
    main.style.justifyContent="center";
    div.style.borderRadius="10px";
    div.style.lineHeight="1.7";
    main.style.alignContent="center";
    img.style.width="280px";
    img.style.height="280px";
    img.style.margin="15px";



}


let employee1= new Employee("Ghazi Samer" ,"Administration","Senior","./assets/Ghazi.jpg" );
let employee2= new Employee("Lana Ali" ,"Finance","Senior","./assets/Lana.jpg" );
let employee3= new Employee("Tamara Ayoub" ,"Marketing","Senior","./assets/Tamara.jpg" );
let employee4= new Employee("Safi Walid" ,"Administration","Mid-Senior","./assets/Safi.jpg" );
let employee5= new Employee("Omar Zaid" ,"Development","Senior","./assets/Omar.jpg" );
let employee6= new Employee("Rana Saleh" ,"Development","Junior","./assets/Rana.jpg" );
let employee7= new Employee("Hadi Ahmad" ,"Finance","Mid-Senior","./assets/Hadi.jpg" );

for(let i=0;i<allEmployee.length;i++){
    allEmployee[i].renderEmp();
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }



