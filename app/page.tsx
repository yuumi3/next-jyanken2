"use client";
import ScoreBox from './_components/ScoreBox';
import JyankenBox from './_components/JyankenBox';
import { useState } from 'react';
import { ScoreType, Te } from './_libs/JyankenType';

export default  function Jyanken () {
  const [scores, setScores] = useState<ScoreType[]>([]);

  const pon = (human: Te) :void => {
    const computer = Math.floor(Math.random() * 3) as Te;
    const judgment = (computer - human + 3) % 3 as Te;
    const score: ScoreType = {human, computer, judgment};
    setScores([score, ...scores]);
  }

  return (
    <>
      <h1>じゃんけん ポン！</h1>
      <JyankenBox pon={pon} />
      <ScoreBox scores={scores} />
    </>
  );
}
