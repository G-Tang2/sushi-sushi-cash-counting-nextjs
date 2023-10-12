export interface Coin {
  fiveCent: number;
  tenCent: number;
  twentyCent: number;
  fiftyCent: number;
  oneDollar: number;
  twoDollar: number;
}

export interface Note {
  fiveDollar: number;
  tenDollar: number;
  twentyDollar: number;
  fiftyDollar: number;
  oneHundredDollar: number;
}

export interface Cash extends Coin, Note {}

export enum Steps {
  Safe,
  Till,
  BankTaking,
}
