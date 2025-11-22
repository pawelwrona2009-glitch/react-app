import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(
    () => {
      console.log(theme);
    },
    { theme }
  );

  return (
    <main className={theme}>
      <h1>Dashboard</h1>
      <span>{theme}</span>
      <button onClick={toggleTheme}>Zmień Motyw</button>
    </main>
  );
}
export default Dashboard;
