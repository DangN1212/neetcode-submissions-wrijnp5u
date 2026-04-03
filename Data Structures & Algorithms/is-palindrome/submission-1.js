class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValidCharacter(c) {
        if((c >= 'a' && c <='z') || 
        (c >= 'A' && c <= 'Z') ||
        (c>= '0' && c <='9')){
            return true
        }

        return false
    };

    isPalindrome(s) {
        let lIndex = 0;
        let rIndex = s.length - 1;

        while(lIndex < rIndex){
            while(lIndex< rIndex && !this.isValidCharacter(s[lIndex])){
                lIndex++
            }

            while(lIndex < rIndex && !this.isValidCharacter(s[rIndex])){
                rIndex--;
            }

            if(s[lIndex].toLowerCase() !== s[rIndex].toLowerCase()){
                return false
            }

            lIndex++;
            rIndex--;
        }

        return true
    }
}
