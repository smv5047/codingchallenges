class Solution:
    def removeDuplicates(self, nums) -> int:
        # iterate over array
        # for i,num in enumerate(nums):
        #     if i<(len(nums)-1):
        #         if (nums[i] == nums[i+1]):
        #             nums.pop(i+1)
        i = 0
        while i < (len(nums)-1):
            if (nums[i] == nums[i+1]):
                nums.pop(i+1)
            else:
                i += 1

        return len(nums)

        # Restrictions - Must modify original array
        # output - length of no dupe array
