import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Images from "./components/Images/Images";
import GoodsCart from "./components/GoodsCart/GoodsCart";

function App() {
  return (
    <div className="App">
        <Header />
        <Content />
        <Images />
        <GoodsCart />
    </div>
  );
}

export default App;
