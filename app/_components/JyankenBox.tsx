import { Te } from '../_libs/JyankenType';

type JyankenBoxProps = {
  pon: (human: Te) => void;
}
export default function JyankenBox ({pon}: JyankenBoxProps) {
  const divStyle: React.CSSProperties = {margin: "0 20px"};
  const buttonStyle: React.CSSProperties = {margin: "0 10px",
     padding: "3px 10px", fontSize: 14};

  return (
    <div style={divStyle}>
      <button onClick={() => pon(Te.Guu)} style={buttonStyle}>グー</button>
      <button onClick={() => pon(Te.Choki)} style={buttonStyle}>チョキ</button>
      <button onClick={() => pon(Te.Paa)} style={buttonStyle}>パー</button>
    </div>
  );
}
