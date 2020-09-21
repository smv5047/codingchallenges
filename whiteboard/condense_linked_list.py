
# Remove any duplicate values from the linked list
# return the head node
# had issues with removing the tail
# TODO review linked list manipulation

# Singly-linked lists are already defined with this interface:
# class ListNode(object):
#   def __init__(self, x):
#     self.value = x
#     self.next = None
#
def condense_linked_list(node):

    head = node

    # create empty hash table
    node_values = {}
    node_values[node.value] = 1
    print(node_values)
    # while node.next is not none
    while node.next:
        # seach hash table for value,
        if node.next.value in node_values:
            # if no n
            if (node.next.next):
             # if value in hash then remove node by setting self.next() = self.next.next()

                node.next = node.next.next
                # move tto next node
                node = node.next
            else:
                node.next = None
        # if it doesn't exist add it
        else:
            node_values[node.value] = 1
            node = node.next
    # if node.value in node_values:

    return head

    # while node.next is not none
