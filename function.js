


// =================================== Product Add=============================================//


/**
 * Data send to ls
 * @param {*} key 
 * @param {*} arr 
 */

function dataSend(key, arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;
}

/**
 * Data Get to ls
 * @param {*} key 
 */
function dataGet(key){
    let data = localStorage.getItem(key);
    return JSON.parse(data);

};