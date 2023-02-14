import { ArrowBackRounded } from "@mui/icons-material";
import classes from "./Watch.module.css";

const Watch = () => {
  return (
    <div className={classes.watch}>
      <div className={classes.homeBack}>
        <ArrowBackRounded />
        Home
      </div>
      <video
        className={classes.video}
        autoPlay
        progress="true"
        controls
        src="https://imdb-video.media-imdb.com/vi1587528985/1434659607842-pgv4ql-1668186199627.mp4?Expires=1676475324&Signature=pcQOksdlcqCX3fdNM8mLzRGV90pUcZbkJCIp9tjudrU2~eAta1iCgDxaYq-cQ53Tchxep9bbDQbeNQJ4UdDxhdnXGiuJZTBBwT0vAd4y8UjGx8vqHaq5OZejkYvT1yNdyDoQPoIFrYmXEL0n9MWc6co734kH-jaGDfh0gqMXfOw60Wr9pBnChZ4Nry19IshRCYRuakANGgFgyAJtpNwlp1JNljKusZEaGcBnWPoCZ0mhhvg3sOvwsjh4BdmyLiarJc99ir3rdkrLS1-23QcoAIxYVL9Ka9l0h~bwLmlPO2UXg7fU06D1vPGEFg3UOu3K~2JrrUw2jRzfWNYQXE1HfA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      />
    </div>
  );
};

export default Watch;
