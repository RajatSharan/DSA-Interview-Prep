var squaresOfASortedArray = function(nums) {

    let left =0
    let right = nums.length-1
    let result = new Array(nums.length)
    let pos = nums.length-1

    while(left <=right){

        if(Math.abs(nums[left])>Math.abs(nums[right])){

            result[pos--]=nums[left]*nums[left]
            left++
        }
        else{
            result[pos--]=nums[right]*nums[right]
            right--
        }
    }

    return result
    
};
console.log(squaresOfASortedArray([-4,-1,0,3,10]))
