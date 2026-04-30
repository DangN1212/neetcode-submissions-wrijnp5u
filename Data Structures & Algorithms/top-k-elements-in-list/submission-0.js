class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        //how to return as order of frequency
        const posMap = {};
        for(const item of nums){
            if(posMap[item]){
                posMap[item] = posMap[item] + 1
            }else{
                posMap[item] = 1
            }
        }

        
        const itemSort = Object.keys(posMap).sort((a,b) => {
            return posMap[b] - posMap[a]
        })

    return itemSort.slice(0,k)
    }
}
