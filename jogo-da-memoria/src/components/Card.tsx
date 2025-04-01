import { CSSProperties } from "react";

interface ICardProps {
  color: string
}

export default function Card({ color }: ICardProps) {

  const style: CSSProperties = {
    height: "10rem",    
    background: color,
  }

  return (
    <>
      <div style={{padding: "1rem", background: color}}>
        <img style={style} src="/moldura.png" />
      </div>
    </>
  );
}