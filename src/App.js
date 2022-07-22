import "./styles.css";
import Search from "./components/search/Search";

export default function App() {
  const onSearchChangeHandler = () => {};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Search onSearchChange={onSearchChangeHandler} />
    </div>
  );
}
