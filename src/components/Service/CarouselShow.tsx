import { CardMedia, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Image from "../../models/Image";

interface CarouselProps {
  pics: Image[];
}

const useStyles = makeStyles((theme) => ({
  sub: {
    backgroundColor: "white",
    color: "black",
  },
  icon: {
    marginBottom: -5,
  },
  subtitle: {
    paddingTop: "5%",
    paddingBottom: "5%",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
}));

function CarouselShow({ pics }: CarouselProps) {

  const classes = useStyles()

  function sliceIntoChunks(arr: Image[], chunkSize: number) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      if (chunk[0].img !== "") {
        res.push(chunk);
      }
    }
    return res;
  }

  const picture = sliceIntoChunks(pics, 1);

  return (
    <Carousel
      interval={5000}
      autoPlay={true}
      stopAutoPlayOnHover={true}
      indicatorContainerProps={{
        style: {
          marginTop: "-5px",
          height: 0,
        },
      }}
    >
      {picture.map((chunk, idx) => (
        <div key={idx}>
          {chunk.map((item) => {
            return (
              <div>
                <CardMedia className={classes.media} image={item.img} />
              </div>
            );
          })}
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselShow;
