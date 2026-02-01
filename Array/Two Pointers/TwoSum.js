//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function TwoSum(nums,target){

    if(nums.lenght<2) return []

    for(let i=0;i<nums.length;i++){

        for(let j=i+1;j<nums.length;j++){

            if(nums[i]+nums[j]=== target){

                return [i,j]
            }

        }

    }


}

console.log(TwoSum([2,7,11,15],9))
console.log(TwoSum([3,2,4],6))