//Find missing number in array

//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


function missingNumber(nums){

    let n=nums.length

    let expectedResult = (n*(n+1))/2

    let actualResult = 0

    for(let i=0;i<nums.length;i++){

        actualResult+=nums[i]
    }
    
    return expectedResult-actualResult


}

console.log(missingNumber([3,0,1,2,5]))

