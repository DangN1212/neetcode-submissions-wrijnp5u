class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
       let minLength = Infinity;
       let lIndex = 0;
       let sum = 0;

       for(let rIndex = 0; rIndex<nums.length;rIndex++){
            sum += nums[rIndex];

            while(sum >= target){
                minLength = Math.min(minLength, rIndex - lIndex + 1);
                sum -= nums[lIndex];
                lIndex++
            }
       }

       return minLength === Infinity ? 0 : minLength;
    }
}
