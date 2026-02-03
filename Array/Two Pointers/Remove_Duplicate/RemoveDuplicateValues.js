// Remove Duplicates from Sorted Array

function DuplicateArray(nums){

    if(nums.length===0) return 0

    let i=0

    for(let j=1;j<nums.length;j++){

        if(nums[j]!==nums[j-1]){
            i++
            nums[i]=nums[j]

        }
    }

    return i
    
}

console.log(DuplicateArray([0,0,1,1,1,2,2,3,3,4]))