class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}
        for (let s of strs){
            const stringSorted = s.split("").sort().join("");
            if(!res[stringSorted]){
                res[stringSorted] = []
            }

            res[stringSorted].push(s)
        }

        return Object.values(res)
    }
}
