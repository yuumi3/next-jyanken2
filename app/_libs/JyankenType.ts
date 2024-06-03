
export const Te = {
  Guu: 0,
  Choki: 1,
  Paa: 2
} as const;

export type Te = (typeof Te)[keyof typeof Te];

const Judgment = {
  Draw: 0,
  Win: 1,
  Lose: 2
} as const;

export type Judgment = (typeof Judgment)[keyof typeof Judgment];

export type ScoreType = {
  human: Te;
  computer: Te;
  judgment: Judgment;
};
