class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const itemMap = {}
        for(let i = 0; i < nums.length; i++){
            if(itemMap[nums[i]]){
                return true
            }else{
                itemMap[nums[i]] = 1
            }
        }

        return false
    }
}
