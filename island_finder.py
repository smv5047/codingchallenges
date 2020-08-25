# Write a function that takes a 2D binary array and returns the number of 1 islands. An island consists of 1s that are connected to the north, south, east or west. For example:

# verticies: 1s
# edges: 1s connected N,S,E,W
# conected componenets: Islands
islands = [[0, 1, 0, 1, 0],
           [1, 1, 0, 1, 1],
           [0, 0, 1, 0, 0],
           [1, 0, 1, 0, 0],
           [1, 1, 0, 0, 0]]


def dft(starting_row, starting_column, island_matrix, visted):
    pass


def island_counter(island_matrix):
    # keep track of all visited vertices in visted islands matrix
    visited_matrix = []
    for i in range(len(island_matrix)):
        visited_matrix.append([False] * len(island_matrix[0]))

    print(visited_matrix)
    island_count = 0
    # walkthrough each cell of the matrix
    for row in range(len(island_matrix)):
        for col in range(len(island_matrix[row])):
            if island_matrix[row][col] == 1 and visited_matrix[row][col] is False:
                # if a acell valie is 1, thats the start of an island
                # traverse the connceted component(graph)
                dft(row, col, island_matrix, visited_matrix)
        # DFT stargin at current cell

        # once we are done dft, that means we have foiund a new Islan
        # Increment some isalnd_count value +1
    pass


    # returns 4
print(island_counter(islands))
