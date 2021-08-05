export default {
  overview: {
    display: "flex",
    backgroundColor: "white",
    height: "100vh",
    flexDirection: "column",
    // fontFamily: "Montserrat sans-serif"
  },
  toggle: {
    position: "relative",
    width: "auto",
    height: "40px",
    overflow: "hidden",
    WebkitTapHighlightColor: "transparent",
    cursor: "default"
  },
  addToCartButton: {
    width: '250px',
    height: '50px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    display: 'block',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  errorMsg: {
    color: "red",
    padding: "0px",
  },
  addedToCart: {
    width: '250px',
    height: '50px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    display: 'block',
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '50px'
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  rating:{

  },
  carouselContainer: {
    display: "flex",
    height: "425px",
    width: "100%",
    padding: "20px",
    justifyContent: "center"
  },
  carousel: {
    display: "flex",
    justifyContent: "space-evenly center",
    width: "550px"
  },
  extraPhotos: {
    display: "flex",
    flexDirection: "column",
    overflow: "scroll"
  },
  extraPhotoContainer: {
    height: "75px",
    width: "75px",
    margin: "0 100px 10px 0",
    backgroundColor: "#d3d3d3",
    borderRadius: "8px"
  },
  extraPhoto: {
    height: "100%",
    width: "100%",
    border: "3px solid #d3d3d3",
    borderRadius: "5px"
  },
  selectedPhoto: {
    height: "80%"
  },
  verticalCarousel: {
    display: "flex",
    transform: "rotate(90deg)",
    justifyContent: "space-evenly center",
    width: "550px"
  },
  productInfo: {
    padding: "20px",
    width: "50%",
    display: "block"
  },
  productStyle: {
    display: "flex",
    flexDirection: "column"
  },
  colorCircles: {
    display: "grid",
    gridTemplateColumns: "50px 50px 50px 50px",
    gridGap: "10px"
  },
  circle: {
    // margin: "10px",
    height: "50px",
    width: "50px",
    backgroundColor: "purple",
    border: "3px solid #d3d3d3",
    borderRadius: "50%"
  },
  select: {
    backgroundColor: "transparent",
    height: "30px",
    width: "auto",
    margin: "10px"
  },
  productDetails: {
    margin: "20px"
  },
  carouselOverrides: {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "400px",
      width: "150%",
      justifyContent: "space-between"
    },
    image: {
      height: "250px",
      width: "95%",
    },
    rightArrow: {
    },
    leftArrow: {
    }
  }
};