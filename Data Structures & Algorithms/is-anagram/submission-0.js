class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const sHashMap = {};
        const tHashMap = {};
    //Loop and store the character into hashmap
        for(let i = 0; i< s.length; i++){
            if(sHashMap[s[i]]){
                sHashMap[s[i]]++
            }else{
                sHashMap[s[i]] = 1;
            }

            if(tHashMap[t[i]]){
                tHashMap[t[i]]++
            }else{
                tHashMap[t[i]] = 1;
            }
        }

        //Loop the sHasMap
        for(const key of Object.keys(sHashMap)){
            if(!tHashMap[key] || sHashMap[key] !== tHashMap[key]){
                return false
            }
        }

        return true
    }
}
