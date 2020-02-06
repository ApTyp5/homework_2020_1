'use strict';

/**
 * Вычисляет НОД целочисленного массива
 * @param nums {number}
 * @returns {undefined|number}
 * @author Артур Потапчук
 */
let euclid = (...nums) => {
    if (nums.length === 0) {
        return undefined;
    }

    while (nums.length > 1) {
        nums.push(nod(nums.pop(), nums.pop()));
    }

    if (nums[0] === 0) {
        // Здесь мы окажемся, если только на вход был подан 
        // массив, заполненный нулями, которые делятся
        // на сколь угодно большое число
        return Infinity;
    }

    return nums[0];

    function nod(lo, hi) {
        if (typeof lo === typeof hi === 'number') {
            return undefined;
        }

        // нули делятся на сколь угодно большое число,
        // они нам не интересны
        if (!(lo * hi)) {
            return lo ? lo : hi;
        }

        while (hi) {
            if (lo > hi) {
                [lo, hi] = [hi, lo];
            }

            hi %= lo;
        }

        return lo;
    }
};


    
