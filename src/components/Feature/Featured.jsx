import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import classes from "./Featured.module.css";

const Featured = ({ type }) => {
  // const typeList =
  //   type === "movie" ? "Movie" : type === "series" ? "Series" : "";

  return (
    <div className={classes.featured}>
      {type && (
        <div className={classes.category}>
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.hindustantimes.com/img/2022/10/06/550x309/maja-ma-review_1665039850921_1665039851085_1665039851085.jpeg"
        alt="img-background"
      />
      <div className={classes.info}>
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        ></img>
        <span className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quis,
          non itaque est ducimus optio enim. Accusamus hic ducimus explicabo
          molestiae reiciendis perferendis enim reprehenderit numquam, ratione
          nostrum ipsam quae.
        </span>
        <div className={classes.buttons}>
          <button className={classes.play}>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className={classes.more}>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
