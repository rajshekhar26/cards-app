import { useSelector } from "react-redux";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import styles from "./App.module.css";

const App = () => {
  const { cards } = useSelector(({ cards }) => cards);

  const total = cards.reduce(
    (prev, current) => prev + current?.projectBudget,
    0
  );

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        Total Projects = {cards?.length || 0}, Total Budget = {total || 0}
      </header>

      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
