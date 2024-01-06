function solution(order) {
    let result = order.toString().match(/[369]/g);
    if (result === null){
        return 0;
    }
    else 
        return result.length;
   
}