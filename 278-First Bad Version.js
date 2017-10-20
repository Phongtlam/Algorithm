// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
//
// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
//
// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Simple binary search disguised as an API

var solution = function(isBadVersion) {

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var min = 0 ;
        var max = n ;
        var mid;

        while(max > min){
            mid = Math.floor((max+min)/2);
            if(isBadVersion(mid)){
                max = mid;
            } else {
                min = mid+1;
            }
        }

        return max;
    };
};
