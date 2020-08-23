# Given two words (begin_word and end_word), and a dictionary's word list,
# return the shortest transformation sequence from begin_word to end_word, such that:
# Only one letter can be changed at a time.
# Each transformed word must exist in the word list. Note that begin_word is not a transformed word.
# Note:
# Return None if there is no such transformation sequence.
# All words contain only lowercase alphabetic characters.
# You may assume no duplicates in the word list.
# You may assume begin_word and end_word are non-empty and are not the same.
# Sample:
# begin_word = "hit"
# end_word = "cog"
# return: ['hit', 'hot', 'cot', 'cog']
# begin_word = "sail"
# end_word = "boat"
# ['sail', 'bail', 'boil', 'boll', 'bolt', 'boat']
# beginWord = "hungry"
# endWord = "happy"
# None

word_graph = {
    'hit': {'hat', 'hot'},
    'hat': {'cat', 'hot', 'hit'},
    'cat': {'cot', 'hat'},
    'hot': {'hit', 'hat', 'cot'},
    'cog': {'cot'},
    'cot': {'cog'}
}


def find_word_path(begin_word, end_word):
    # do BFS
    # create a queue
    # create a visited set
    # add start word to Queue (like a path)
    # while queue not empt
    # pop current word off quqeu
    # if word has not been visited:
    #   is current word the end word? If yes return path
    # add current word ot visited set
    # add neighbors of current word to quee (like a path)
    pass
