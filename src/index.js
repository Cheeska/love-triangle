/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

    var count = 0;
    var firstEl = 0;
    var secondEl = 0;
    var thitdEl = 0;
    var lengthOfPreference = preferences.length;

    for (var i = 0; i < lengthOfPreference; i++) {

        firstEl = preferences[i];
        if (verification(firstEl)) {
            secondEl = preferences[firstEl - 1];
            if (verification(secondEl)) {
                thitdEl = preferences[secondEl - 1];
                if (thitdEl  - 1 == i && secondEl != i + 2) count++;
            }
        }

    }
    return count / 3;

    function verification(valueElement) {
        if ((valueElement < lengthOfPreference ) || (valueElement == lengthOfPreference)) {
            return true;
        } else {
            return false;
        }

    }
}
//onsole.log(getLoveTrianglesCount([2,3,1,5,6,4]));
;



