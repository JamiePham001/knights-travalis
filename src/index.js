import "./styles.css";

class Knight {
  constructor(startPos) {
    this.startPos = startPos;
    this.board = [
      ["A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8"],
      ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"],
      ["A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6"],
      ["A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5"],
      ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4"],
      ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
      ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
      ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
    ];
  }

  posToIndex(stringPos) {
    for (let y = 0; y < 8; y++) {
      for (let x = 0; x < 8; x++) {
        if (stringPos === this.board[x][y]) {
          return [x, y];
        }
      }
    }
    return null;
  }

  knightMoves(position) {
    const moves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];

    return moves
      .map(([dx, dy]) => [position[0] + dx, position[1] + dy])
      .filter(([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8);
  }

  move(nextPos) {
    try {
      const start = this.posToIndex(this.startPos);
      const end = this.posToIndex(nextPos);

      if (end === null) {
        throw "Inputted position is invalid.";
      }

      // BFS implementation
      const queue = [[start, [start]]];
      const visited = new Set([start.toString()]);

      while (queue.length > 0) {
        const [current, path] = queue.shift();

        // Check if we've reached the destination
        if (current[0] === end[0] && current[1] === end[1]) {
          // Print the path
          path.forEach((pos) => {
            console.log(`[${pos[0]}, ${pos[1]}] ${this.board[pos[0]][pos[1]]}`);
          });
          this.startPos = nextPos;
          return path;
        }

        // Explore all possible moves
        for (const move of this.knightMoves(current)) {
          const key = move.toString();
          if (!visited.has(key)) {
            visited.add(key);
            queue.push([move, [...path, move]]);
          }
        }
      }

      console.log("No path found");
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

let newKnight = new Knight("A8");

newKnight.move("H1");
console.log(newKnight.startPos);
newKnight.move("G8");
console.log(newKnight.startPos);
// newKnight.move("E5");
// newKnight.move("G8");
