class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length === 0) return 0;
        let countUq = 1;
        let rIndex = 1;

        //loop from the start
        for(let lIndex = 1; lIndex < nums.length; lIndex++){
            if(nums[lIndex] !== nums[lIndex - 1]){
                nums[rIndex] = nums[lIndex];
                rIndex++;
                countUq++;
            }
        }
        return countUq;
    }
}