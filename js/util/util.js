(function () {

    Number.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    shuffleArray = function (array) {

        //console.error(" in fuction with array : " , array);
        for (var i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        //console.error(" end of  fuction with array : " , array);
        newArr = array;

        return newArr;

    };

    Math.signum = function (n) {
        if (n === 0) return n;
        if (n > 0) return +1;
        if (n < 0) return -1;
    };


})();
