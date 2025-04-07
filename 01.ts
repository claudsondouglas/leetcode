function twoSum(nums: number[], target: number): number[] {
    let sum : number[] = [];

    // use loop label
    twoSumLoop:
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                sum = [i, j]
                break twoSumLoop;
            }
        }
    }

    return sum
};

console.log(twoSum([2,5,5,11], 10));