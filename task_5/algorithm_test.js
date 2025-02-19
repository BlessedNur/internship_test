function twoSum(nums, target) {
  const numbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numbers.has(complement)) {
      return [numbers.get(complement), i];
    }

    numbers.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// trying examples
console.log(twoSum([3, 2, 4], 6));
