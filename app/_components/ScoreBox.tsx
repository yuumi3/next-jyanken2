import { ScoreType } from '../_libs/JyankenType';

type ScoreBoxProps = {
  scores: ScoreType[];
}
export default function ScoreBox ({scores}: ScoreBoxProps)  {
  const teString = ["グー","チョキ", "パー"];
  const judgmentString = ["引き分け","勝ち", "負け"];

  const tableStyle: React.CSSProperties = {marginTop: 20, borderCollapse: "collapse"};
  const thStyle: React.CSSProperties = {border: "solid 1px #888", padding: "3px 15px"};
  const tdStyle: React.CSSProperties = {border: "solid 1px #888", padding: "3px 15px",
      textAlign: "center"};

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>あなた</th>
          <th style={thStyle}>コンピュター</th>
          <th style={thStyle}>勝敗</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((scrore, ix) =>
          <tr key={ix}>
            <td style={tdStyle}>{teString[scrore.human]}</td>
            <td style={tdStyle}>{teString[scrore.computer]}</td>
            <td style={tdStyle}>{judgmentString[scrore.judgment]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
