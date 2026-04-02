class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res =0;
        let lIndex = 0;
        let countF = 0;
        const sMap = new Map();

        for(let rIndex = 0; rIndex < s.length; rIndex++){

            sMap.set(s[rIndex], (sMap.has(s[rIndex]) ? sMap.get(s[rIndex]) : 0) + 1);
            countF = Math.max(countF, sMap.get(s[rIndex]));

            while(rIndex - lIndex + 1 - countF > k){
                sMap.set(s[lIndex], sMap.get(s[lIndex]) - 1);
                lIndex++
            }

            res = Math.max(res, rIndex - lIndex + 1)
        }


        return res;
    }
}
