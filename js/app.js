'use strict';

let ID=1000;
let employee ={
    employeeID:ID++,
    fullName:'Ghazi Samer',
    department: 'Administration',
    Level:'Senior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 

render(employee);




let employee2 ={
    employeeID:ID++,
    fullName:'Lana Ali',
    department: 'Finance',
    Level:'Senior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 
render(employee2);



let employee3 ={
    employeeID:ID++,
    fullName:'Tamara Ayoub',
    department: 'Marketing',
    Level:'Senior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 
render(employee3);




let employee4 ={
    employeeID:ID++,
    fullName:'Safi Walid',
    department: 'Administration',
    Level:'Mid-Senior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 
render(employee4);



let employee5 ={
    employeeID:ID++,
    fullName:'Omar Zaid	',
    department: 'Development',
    Level:'Senior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 
render(employee5);



let employee6 ={
    employeeID:ID++,
    fullName:'Rana Saleh',
    department: 'Development',
    Level:'Junior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 

render(employee6);


let employee7 ={
    employeeID:ID++,
    fullName:'Hadi Ahmad',
    department: 'Finance',
    Level:'Mid-Senior',
    imageURL:'https://www.sacombank.com.kh/wp-content/uploads/2017/11/personal-website-design-Copy.png',
    salary:function(){
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
    },
} 

render(employee7);




function render(employee){
  document.write("<h3>Employee name: " + employee.fullName + "</h3>");
  document.write("<h3>Employee Salary: " + employee.salary() + "</h3>");
  document.write("<br>");

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