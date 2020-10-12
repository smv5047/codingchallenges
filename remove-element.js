/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //loop over nums array
  let numOfSwitches = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[numOfSwitches] = nums[i];

      numOfSwitches++;
    }
  }
  console.log(nums.length - numOfSwitches);
  //return the length
  return numOfSwitches;
};
