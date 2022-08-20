import { WheelEvent, FunctionComponent } from "react";
import "./Corousel.css";

export interface IItemsProps {
  title: string;
  order: number;
  image: string;
  link: string;
}

interface ICorouselProps {
  items: IItemsProps[];
}

const Corousel: FunctionComponent<ICorouselProps> = (props) => {
  const { items } = props;
  const mouseWheel = (event: WheelEvent) => {
    if (event.deltaY > 0) return event.currentTarget.scrollBy(300, 0);
    else return event.currentTarget.scrollBy(-300, 0);
  };

  const sortItems = (items: IItemsProps[]) =>
    [...items].sort((a, b) => a.order - b.order);

  return (
    <div id="items-wrapper">
      <div onWheel={mouseWheel} id="items">
        {sortItems(items).map((item) => {
          return (
            <a
              key={item.order}
              className="item"
              href={item.link}
              target="blanck"
            >
              <h1>{item.title}</h1>
              <img alt="" src={item.image} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Corousel;
