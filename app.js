
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



 /**
  * To-Do List
  */

 const do_form = document.getElementById('do_form');
 const list = document.getElementById('list');


 do_form.addEventListener('submit', function(e){

    e.preventDefault();


    let do_name = this.querySelector('input[name="do_name"]').value;
    let select = this.querySelector('select[name="select"]').value;


    if( do_name == '' || select == ''){

        alert('All fields are required');

    }else{

        let li = document.createElement('li');
        li.className = 'list-group-item';

        let closebtn = document.createElement('button');
        closebtn.innerHTML = '&times;';
        closebtn.className = 'close';

        let do_tex = document.createTextNode(do_name);

        
        li.appendChild(closebtn);
        li.insertBefore(do_tex, closebtn);
        list.appendChild(li);
        

        this.querySelector('input[name="do_name"]').value ='';

        closebtn.addEventListener('click', function(){

            this.parentElement.remove();

        });

    }

    

 });



 

/**
 * Add New Product
 */

const add_product = document.getElementById('add_product');
const sees = document.querySelector('.sees');
const plist = document.getElementById('plist');
const add_box = document.querySelector('.add_box');
const product = document.getElementById('product');


add_product.addEventListener('click', function(){

    add_box.style.display ='block';

});
sees.addEventListener('click', function(){

    add_box.style.display ='none';

});

product.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let price = this.querySelector('input[name="price"]').value;
    let sale = this.querySelector('input[name="sale"]').value;
    let photo = this.querySelector('input[name="photo"]').value;

    let product_arr;

    if( dataGet('products')){
        product_arr = dataGet('products');
    }else{
        product_arr = [];
    }

    product_arr.push({
        name    : name,
        price   : price, 
        sale    : sale, 
        photo   : photo 
    });


    dataSend('products', product_arr);

    allProducts(); 

});





allProducts();
function allProducts(){

    let all_products = dataGet('products');

    let data = '';

    all_products.map(pdata => {
        data += `

        <div class="col-md-3 my-3">
            <div class="card">
                <img class="card-image" src="${pdata.photo}" alt="">
                <div class="card-body">
                    <h3>${pdata.name}</h3>
                    <p> <span class="regular-price">$200</span>  <span class="sale-price">$200</span> </p>

                    <br>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        
        
        `;

    });

    plist.innerHTML = data;


}


/**
 * Developer Add
 */


 
 // get elements 
 const devs_form = document.getElementById('devs_form');
 const devs_area = document.querySelector('.devs-area');
 
 
 
 // Devs form submit 
 devs_form.addEventListener('submit', function(e){
     e.preventDefault();
 
     let name = this.querySelector('input[name="name"]');
     let gender = this.querySelector('input[name="gender"]:checked');
     let skill = this.querySelectorAll('input[name="skill"]:checked');
     let photo = this.querySelector('input[name="photo"]');
 
     let skills_arr = [];
 
     for(let i = 0; i < skill.length ; i++){
         skills_arr.push(skill[i].value);
     }
 
     let data_arr;
     if(dataGet('devs')){
         data_arr = dataGet('devs');
     }else{
         data_arr = [];
     }
 
     data_arr.push({
         name : name.value, 
         gender : gender.value, 
         skills : skills_arr,
         photo : photo.value
     });
 
     dataSend('devs', data_arr);
   
     allDevs();
 
 });
 
 
 
 allDevs();
 function allDevs(){
     let all_devs = dataGet('devs');
 
     let data = '';
     all_devs.map(d => {
 
         let lists = '';
 
         d.skills.map(list => {
             lists += '<li class="list-group-item"> '+ list +'  </li>';
         });
 
         data += `
 
                 <div class="col-md-4 my-3">
                         <div class="card">
                             <img style="width:100%; height:250px; object-fit: cover; " class="card-img" src="${ d.photo }" alt="">
                             <div class="card-body">
                                 <h2>${ d.name }</h2>
                                 <p>Gender : ${ d.gender }</p>
                                 <hr>
                                 skills 
                                 <hr>
                                 <ul class="list-group">
                                     
                                     ${ lists }
 
                                     
                                 </ul>
                                 
                             </div>
                         </div>
                     </div>
         
         `;
 
     });
 
     devs_area.innerHTML = data;
 
 }
 
