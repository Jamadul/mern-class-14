
/**
 * Fiverr Counter Loader
 */

const fiverr_order = document.querySelector('#fiverr_order');

const counter = document.querySelector('.counter');



fiverr_order.addEventListener('submit', function(e){

    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;


    
    setInterval(() =>{
    let start_time = new Date();
    let end_time = new Date(date +' '+ time);


    let diff_time = Math.floor(Math.abs(end_time.getTime()-start_time.getTime()));

    let total_sec = Math.floor(diff_time / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    let hours = total_hour - (total_day*24);
    let min = total_min - (total_day*24*60) -(hours*60);
    let sec = total_sec - (total_day*24*60*60)-(hours*60*60) -(min*60);


    counter.innerHTML = ` ${total_day > 9 ? total_day : '0'+total_day} day : ${hours > 9 ? hours : '0'+hours} hour : ${min > 9 ? min : '0'+min} min : ${sec> 9 ? sec : '0'+sec} sec`;

    }, 1000);

    

    
});




/**
 * Age calculater
 */

 const age = document.querySelector('#age');

 const age_counter = document.querySelector('.age_counter');
 
 
 
 age.addEventListener('submit', function(e){
 
     e.preventDefault();
 
     let date = this.querySelector('input[type="date"]').value;
     let time = this.querySelector('input[type="time"]').value;
 
 
     
    

     let start_time = new Date(date +' '+ time);
     let end_time = new Date();
     
 
 
     let diff_time = Math.floor(Math.abs(start_time.getTime()-end_time.getTime()));



    let total_sec = Math.floor(diff_time / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);
    let total_month = Math.floor(total_day / 30);
    let total_year = Math.floor(total_month / 12);
 
    let month = total_month - (total_year*12);
    let day = total_day - (total_year*12*30)-(month*30);
   
 
 
     age_counter.innerHTML = ` ${total_year} years : ${month} month : ${day} day`;
 
 
     
 });





