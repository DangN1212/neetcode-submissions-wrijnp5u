class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map();

        for(let index = 0; index < nums.length; index++){
            if(map.has(nums[index])){
                return true
            }else{
                map.set(nums[index])
            }
        }

        return false
    }
}
