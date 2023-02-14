import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import classes from "./List.module.css";
import ListItem from "./ListItem";

const List = () => {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [slideNum, setSlideNum] = useState(0);

  const handleClickArrow = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      listRef.current.style.transform = `translateX(${255 + distance}px)`;
    }

    if (direction === "right" && slideNum < 6) {
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translateX(${-255 + distance}px)`;
    }
  };

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>Continue to watch</span>
      <div className={classes.wrapper}>
        <ArrowBackIosOutlined
          className={`${classes.siderarrow} ${classes.left}`}
          onClick={() => handleClickArrow("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className={classes.container} ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
          <ListItem index={10} />
          <ListItem index={11} />
        </div>
        <ArrowForwardIosOutlined
          className={`${classes.siderarrow} ${classes.right}`}
          onClick={() => handleClickArrow("right")}
        />
      </div>
    </div>
  );
};

export default List;
