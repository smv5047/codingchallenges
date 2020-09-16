# Given an array of integers, find if the array contains any duplicates.

# Your function should return true if any value appears at least twice
# in the array, and it should return false if every element is distinct.

class Solution:
    def containsDuplicate(self, nums) -> bool:
        # create empty dict
        num_dict = {}
        # loop over list
        for num in nums:
            # If num is already in dict return true
            if num in num_dict:
                return True
            # Else add values to dict
            else:
                num_dict[num] = 1
        # otherwise return false
        return False
