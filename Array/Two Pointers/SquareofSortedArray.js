var squaresOfASortedArray = function(nums) {

    if(nums.length===0) return []

    for(let i=0;i<nums.length;i++){

               nums[i]=nums[i]*nums[i]
               
               
    }

    nums.sort((a,b) =>a-b)
    return nums
    
};
console.log(squaresOfASortedArray([-4,-1,0,3,10]))
