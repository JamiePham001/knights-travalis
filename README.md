# Knight's Shortest Path Finder

This JavaScript project calculates the shortest path for a knight piece on a standard 8x8 chessboard from a starting position to a target position using the Breadth-First Search (BFS) algorithm.

## Features

- **Chessboard Representation**: The board is represented as an 8x8 array with standard chess notation (e.g., "A8", "B1").
- **Position Conversion**: Converts between chess notation and array indices for internal calculations.
- **Valid Moves Calculation**: Determines all possible legal moves for a knight from a given position.
- **Shortest Path Calculation**: Utilizes BFS to find and display the shortest path from the knight's current position to the target position.

## Code Overview

### Knight Class

The `Knight` class encapsulates the functionality of the knight's movement on the chessboard.

#### Properties

- `startPos`: The current position of the knight in chess notation.
- `board`: A two-dimensional array representing the chessboard with positions in chess notation.

#### Methods

- `posToIndex(stringPos)`: Converts a position in chess notation to board indices `[x, y]`.
- `knightMoves(position)`: Returns an array of valid moves `[x, y]` from the given position.
- `move(nextPos)`: Calculates and prints the shortest path from the current position to `nextPos`. Updates `startPos` upon successful move.

### Example Usage

```javascript
let newKnight = new Knight("A8");

newKnight.move("H1");
console.log(newKnight.startPos); // Outputs: H1

newKnight.move("G8");
console.log(newKnight.startPos); // Outputs: G8
```

## How It Works

1. **Initialization**: Create an instance of the `Knight` class with a starting position.
2. **Finding the Shortest Path**: Call the `move()` method with the target position. The method:

   - Converts positions to board indices.
   - Uses BFS to explore all possible paths.
   - Prints the sequence of moves from the start to the target position.
   - Updates the knight's current position to the target position if a path is found.

3. **Error Handling**: If the target position is invalid or unreachable, an error message is logged.

## Notes

- The chessboard is zero-indexed internally, with `[0,0]` corresponding to "A8".
- The `move()` method prints each step in the path in both index form and chess notation.
- Ensure that the input positions are valid chessboard coordinates in the format "A1" to "H8".

This project provides a foundational understanding of pathfinding algorithms and their application in a chess context.
