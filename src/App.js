import { useSelector } from "react-redux";

const App = () => {
  const { cards } = useSelector(({ cards }) => cards);
  console.log(cards, "cards");

  return <div className="App">Hello World</div>;
};

export default App;
