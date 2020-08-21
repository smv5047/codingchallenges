# You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
# Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

# The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

# Example 1:

# Input: J = "aA", S = "aAAbbbb"
# Output: 3
# Example 2:

# Input: J = "z", S = "ZZ"
# Output: 0
# Note:

# S and J will consist of letters and have length at most 50.
# The characters in J are distinct.

#Input - Str
#Output - Int

# count how many times each character in J appears in S
class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:

        # naive solution
        # performed this first
        # nested for loops
        # O(n^2)
        # incrementer = 0
        # for char_j in J:
        #     for char_s in S:
        #         if char_j == char_s:
        #             incrementer += 1
        # return incrementer

        # O(n)
        # nonnaive
        # create hashtable
        # keys  = chars from S
        # value = # of occurences

        jewels_dict = {}

        for char_j in J:
            jewels_dict[char_j] = 0

        for char_s in S:
            if char_s in jewels_dict:
                count += 1

        # for values in jewels_dict.values():
        #     count += values

        return count
