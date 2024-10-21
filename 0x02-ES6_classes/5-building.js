export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter and Setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
