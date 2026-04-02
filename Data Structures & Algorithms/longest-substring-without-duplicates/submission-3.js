class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lIndex = 0;
        let minLength = 0;
        const uniqueStr = new Set();

        for(let rIndex = 0; rIndex < s.length; rIndex++){
            while(uniqueStr.has(s[rIndex])){
                const size = uniqueStr.size;
                uniqueStr.delete(s[lIndex])
                lIndex++;

            }

            uniqueStr.add(s[rIndex])
                minLength = Math.max(minLength, rIndex - lIndex + 1);
        }
        return minLength
    }
}
