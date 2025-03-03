export enum Color {
  White,
  Black,
}

export type Coords = {
  x: number;
  y: number;
};

export enum FENChar {
  WhitePawn = 'P',
  WhiteKnight = 'N',
  WhiteBishop = 'B',
  WhiteRook = 'R',
  WhiteQueen = 'Q',
  WhiteKing = 'K',
  BlackPawn = 'p',
  BlackKnight = 'n',
  BlackBishop = 'b',
  BlackRook = 'r',
  BlackQueen = 'q',
  BlackKing = 'k',
}

export const pieceImagePaths: Readonly<Record<FENChar, string>> = {
  [FENChar.WhitePawn]: 'assets/images/white pawn.svg',
  [FENChar.WhiteKnight]: 'assets/images/white knight.svg',
  [FENChar.WhiteBishop]: 'assets/images/white bishop.svg',
  [FENChar.WhiteRook]: 'assets/images/white rook.svg',
  [FENChar.WhiteQueen]: 'assets/images/white queen.svg',
  [FENChar.WhiteKing]: 'assets/images/white king.svg',
  [FENChar.BlackPawn]: 'assets/images/black pawn.svg',
  [FENChar.BlackKnight]: 'assets/images/black knight.svg',
  [FENChar.BlackBishop]: 'assets/images/black bishop.svg',
  [FENChar.BlackRook]: 'assets/images/black rook.svg',
  [FENChar.BlackQueen]: 'assets/images/black queen.svg',
  [FENChar.BlackKing]: 'assets/images/black king.svg',
};
