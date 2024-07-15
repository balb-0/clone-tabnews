import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ top: "53%", left: "52%" });

  const handleMouseEnter = () => {
    const randomTop = `${Math.floor(Math.random() * 90) + 5}%`;
    const randomLeft = `${Math.floor(Math.random() * 90) + 5}%`;
    setPosition({ top: randomTop, left: randomLeft });
  };

  const windowAlert = () => {
    const alertaTela = window.alert("Vamos sair então! :)");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Quer sair comigo essa semana?</h1>
      <button style={styles.button1} onMouseDown={windowAlert}>
        Sim
      </button>
      <button
        style={{ ...styles.button2, ...styles.movingButton, ...position }}
        onMouseEnter={handleMouseEnter}
      >
        Não
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "relative",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button1: {
    padding: "10px 20px",
    fontSize: "1rem",
    margin: "10px",
    cursor: "pointer",
    position: "absolute",
    top: "53%",
    left: "40%",
  },
  button2: {
    padding: "10px 20px",
    fontSize: "1rem",
    margin: "10px",
    cursor: "pointer",
  },
  movingButton: {
    position: "absolute",
    transition: "top 0.1s, left 0.1s",
  },
};
