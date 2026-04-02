class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let count = 0;
        let lIndex = 0;
        let sum = 0;
       
        for(let rIndex = 0; rIndex< arr.length; rIndex++){
            sum += arr[rIndex];

            if(rIndex - lIndex + 1 === k){
               if(sum>= threshold * k){
               count++;}

            sum -= arr[lIndex];
            lIndex++

            }

        }

        return count
    }
}
