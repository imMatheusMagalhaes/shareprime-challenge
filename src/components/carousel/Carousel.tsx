import { WheelEvent, FunctionComponent, useState, useEffect } from "react";
import { store } from "../../store/store";
import "./Corousel.css";

export interface IItemsProps {
  title: string;
  order: number;
  image: string;
  link: string;
}

const Corousel: FunctionComponent = () => {
  const [items, setItems] = useState<IItemsProps[]>(store.getState().item);
  const getItemsFromState = (
    setItems: React.Dispatch<React.SetStateAction<IItemsProps[]>>
  ) => {
    const handleStateChange = () => setItems(store.getState().item);
    return store.subscribe(handleStateChange);
  };
  useEffect(() => {
    const disconnectState = getItemsFromState(setItems);
    return disconnectState();
  }, []);
  const mouseWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) return event.currentTarget.scrollBy(300, 0);
    else return event.currentTarget.scrollBy(-300, 0);
  };
  const sortItems = (items: IItemsProps[]) =>
    [...items].sort((a, b) => a.order - b.order);
  return (
    <div onWheel={mouseWheel} id="items">
      {sortItems(items).map((item) => {
        return (
          <a key={item.order} className="item" href={item.link} target="blanck">
            <img alt="" src={item.image} />
            <div id="config-title">{item.title}</div>
          </a>
        );
      })}
    </div>
  );
};
export default Corousel;
