import { FunctionComponent, useState } from "react";
import Corousel, { IItemsProps } from "./components/carousel/Carousel";
import InsertForm from "./pages/insert-form/InsertForm";
import { store } from "./store/store";

const App: FunctionComponent = () => {
  const [items, setItems] = useState<IItemsProps[]>(store.getState().item);
  const handleStateChange = () => setItems(store.getState().item);
  store.subscribe(handleStateChange);
  return (
    <div>
      <InsertForm />
      <Corousel items={items} />
    </div>
  );
};

export default App;
