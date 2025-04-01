'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  const qtd = 20;
  const [selectedColors, setSelectecColors] = useState<string[]>([]);

  const colors = [
    "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", 
    "#800000", "#808000", "#008000", "#800080", "#008080", "#000080",
    "#FFA500", "#A52A2A", "#5F9EA0", "#7FFF00", "#DC143C", "#6495ED",
    "#FF4500", "#2E8B57", "#DA70D6", "#8A2BE2", "#FF1493", "#FFD700",
    "#1E90FF", "#8B0000", "#00CED1", "#FF69B4", "#4682B4", "#B22222",
    "#ADFF2F", "#9932CC", "#00FA9A", "#FF6347", "#9400D3", "#20B2AA",
    "#D2691E", "#32CD32", "#BA55D3", "#228B22", "#FF8C00", "#6A5ACD",
    "#808080", "#C71585", "#008B8B", "#556B2F", "#E9967A", "#483D8B"
  ];

  useEffect(() => {
    ColorSelected(qtd);
  }, [])

  // Função para sortear cores e criar pares embaralhados
  function ColorSelected(qtdPares: number) {
    // Seleciona um conjunto de cores sem repetição
    const coresSelecionadas = colors
      .sort(() => 0.5 - Math.random()) // Embaralha antes de pegar
      .slice(0, qtdPares); // Pega as cores necessárias

    // Duplica os pares e embaralha
    const coresJogo = [...coresSelecionadas, ...coresSelecionadas]
      .sort(() => 0.5 - Math.random());

    setSelectecColors(coresJogo)
  }


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".25rem"
          }}
        >
          {
            selectedColors.map((color, idx) => 
              <Card key={idx} color={color} />
            )
          }
        </div>
      </main>
    </div>
  );
}
