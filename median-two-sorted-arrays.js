/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function (nums1, nums2) {
    let nums3 = nums1.concat(nums2).sort((a, b) => a - b);
    // console.log(nums3)

    // if the array length is even, a will be 1
    // if the array length is odd, a will be 0
    let a = nums3.length % 2;
    // console.log('a is: ' + a)


    // if a  != 0 then calculate median location normally, nums3[nums3.length/2]
    if (a != 0) {
        return nums3[Math.floor(nums3.length / 2)];
    } else {
        // if a = 0 then calculate median location by adding two middle numbers and dividing by 2
        let location1 = nums3.length / 2 - 1;
        // console.log(location1)
        // console.log(nums3[location1])

        let location2 = location1 + 1;
        // console.log(location2)
        // console.log(nums3[location2])

        let median = (nums3[location1] + nums3[location2]) / 2.0;
        // console.log(median)

        return median;

    }

};

// findMedianSortedArrays([1, 3], [2])

findMedianSortedArrays([1, 2], [3, 4])