import {
  AddRounded,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import classes from "./ListItem.module.css";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div
      className={classes.listItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img
        src="https://mobimg.b-cdn.net/v3/fetch/38/3808550f5d55a3dcf089300d2d007705.jpeg"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} loop autoPlay></video>
          <div className={classes.itemInfo}>
            <div className={classes.icons}>
              <PlayArrow className={classes.icon} />
              <AddRounded className={classes.icon} />
              <ThumbUpOutlined className={classes.icon} />
              <ThumbDownOutlined className={classes.icon} />
            </div>
            <div className={classes.itemInfoTop}>
              <span>1h 34mins</span>
              <span className={classes.limited}>+18</span>
              <span>2022</span>
            </div>
            <div className={classes.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              sed, accusamus eveniet rem sit soluta sunt.
            </div>
            <span className={classes.genre}>Action</span>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
