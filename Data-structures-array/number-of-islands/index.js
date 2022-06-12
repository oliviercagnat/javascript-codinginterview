Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

var numIslands = function (grid) {

    // Pretty much, we're going to go
    // over each row and each column within the matrix / graph
    // and each time we reach a potential island, we perform a dfs / bfs
    // So we can skip island nodes we have already visited. As they will become water.
    // Once we have explored the entire island, we increment
    // our number of island count.

    let   number_of_islands = 0;
    const num_rows          = grid.length - 1;
    const num_cols          = grid[0].length - 1;

    // This runs DFS
    // Checking our indexes are within the correct bounds
    // Getting the
    // top, left, right, bottom
    // nodes
    const depth_first_search = (row_index, col_index) => {
        // Firstly is the given indexs within range?
        // Cannot be greater than the greatest and cannot be negative. I honestly wish we had a better way of doing this.
        if (row_index > num_rows || col_index > num_cols || row_index < 0 || col_index < 0) {
            return;
        }

        const node = grid[row_index][col_index];

        // So the node is valid, have we been here before?
        // and is it an island node?
        if (node === "0") {
            return;
        }

        // Right, so this is a valid node, let's index it.
        // We do this making it water, meaning, we don't need to explore it any longer
        grid[row_index][col_index] = "0";

        // Go up
        depth_first_search(row_index - 1, col_index);

        // Go down
        depth_first_search(row_index + 1, col_index);

        // Go right
        depth_first_search(row_index, col_index + 1);

        // Go left
        depth_first_search(row_index, col_index - 1);
    };

    // For each row, and column, check if the node
    // is a `1` and if it is we perform a DFS on that island,
    // which will run until that entire island has been explored.
    // Where for each 1 we find we remove it from the grid, so we don't need to check it again.
    // at which point we increment our island counter.
    grid.forEach((row, row_index) => {
        row.forEach((col, col_index) => {
            // Is this a island and we haven't been here before?
            // EXPLORE IT!!
            if (col === "1") {
                // Perform a DFS, which will automatically index this node
                depth_first_search(row_index, col_index);

                // Now we have explored this entire island
                // increment our counter
                number_of_islands += 1;
            }
        });
    });

    return number_of_islands;
};
