import { Color, Coords, FENChar } from '../models';
import { Piece } from './piece';

export class Knight extends Piece {
  protected override _FENChar: FENChar = FENChar.WhiteKnight;
  protected override _directions: Coords[] = [
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
  ];

  constructor(private pieceColor: Color) {
    super(pieceColor);
    this._FENChar =
      pieceColor === Color.White ? FENChar.WhiteKnight : FENChar.BlackKnight;
  }
}
