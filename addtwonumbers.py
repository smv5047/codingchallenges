# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:

        # set carry to 0
        carry = 0
        # create new list equal to the first list
        l3 = l1

        while 1:
            # track carry
            temp_carry = (l1.val+l2.val+carry)//10
            # add value
            l1.val = (l1.val+l2.val+carry) % 10
            carry = temp_carry
            # if there are no values left break the while loop
            if carry == 0 and l1.next == None and l2.next == None:
                break
            if l1.next == None:
                l = ListNode(0)
                l1.next = l
            if l2.next == None:
                l = ListNode(0)
                l2.next = l
            l1 = l1.next
            l2 = l2.next
        return l3
