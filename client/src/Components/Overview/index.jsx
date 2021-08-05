import React from 'react'
import styles from './styles.js'
import VerticalCarousel from './VerticalCarousel.jsx'
import StarsDisplay from '../Shared/StarsDisplay.jsx'
import axios from 'axios'
import {getOneProduct, getProductStyle} from '../../../Controllers/general.js'
import Carousel from '../Shared/Carousel/Carousel.jsx';
import {getRelatedProductIds, getProductsByIds,
  getStylesByIds, getMetadataByIds}
from '../../../Controllers/related-outfit.js';
export default class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addedToCart: false,
      selectedSize: 'Select Size',
      product: {},
      styles: [],
      selectedStyle: {},
      styleSelectError: false,
      selectedQuantity: '-',
      position: 0,
      extendView: false,
      ratings: 3.6
    }
    this.addToCart = this.addToCart.bind(this)
    this.magnify = this.magnify.bind(this)
    this.changeThumbnail = this.changeThumbnail.bind(this)
    this.extendedView = this.extendedView.bind(this)
    this.changeQuantity = this.changeQuantity.bind(this)
    this.changeSelectedSize = this.changeSelectedSize.bind(this)
    this.changeSelectedStyle = this.changeSelectedStyle.bind(this)
    this.getSizeQuantity = this.getSizeQuantity.bind(this)
    this.getProductAndStyles = this.getProductAndStyles.bind(this)
  }
  getProductAndStyles() {
    getOneProduct(this.props.product, (err, results) => {
      if (err) {
        return console.log('Unable to get a product: ', err)
      }
      getProductStyle(results.id, (err, styles) => {
        if (err) {
          return console.log('Unable to get styles', err)
        }
        this.setState({
          product: results,
          styles: styles.results,
          selectedStyle: styles.results[0]
        });
      })
    })
  }
  componentDidMount() {
    this.getProductAndStyles()
  }
  componentDidUpdate(prevProps) {
    if (Number(this.props.product) !== Number(prevProps.product)) {
      this.getProductAndStyles()
      window.scrollTo(0, 0)
      getMetadataByIds([this.props.product], (err, responses) => {
        if (err) { return console.log('Unable to get all review data: ', err); }
        var allReviewData = responses.map((response) => {
          return response.data;
        })
        allReviewData = allReviewData.map((oneReview) => {
          var totalStars = 0;
          var numberOfReviews = 0;
          for (var key in oneReview.ratings) {
            totalStars += parseInt(oneReview.ratings[key]) * key;
            numberOfReviews += parseInt(oneReview.ratings[key]);
          }
          return (totalStars / numberOfReviews).toFixed(1);
        })
        this.setState({ratings: allReviewData});
      })
    }
  }
  addToCart() {
    if (this.state.selectedSize === 'Select Size') {
      this.setState({
        styleSelectError: true
      })
      return;
    }
    axios.post('/cart', {
      "sku_id": this.state.product.id,
      "count": this.state.selectedQuantity,
      "size": this.state.selectedSize
    })
    .then((data)=>{
      this.setState({
        addedToCart: true
      })
    })
    .catch(()=>{
      console.log('Error')
    })
  }
  changeQuantity(event) {
    this.setState({
      selectedQuantity: Number(event.target.value)
    })
  }
  changeSelectedSize(event) {
    this.setState({
      selectedSize: event.target.value,
      selectedQuantity: 1,
      styleSelectError: false
    })
  }
  getSizeQuantity(inventory) {
    for (var i = 0; i < inventory.length; i++) {
      if (inventory[i].size === this.state.selectedSize) {
        return inventory[i].quantity
      }
    }
    return 0
  }
  changeSelectedStyle(index) {
    this.setState({
      selectedStyle: this.state.styles[index],
      selectedQuantity: 1,
      selectedSize: 'Select Size'
    })
  }
  changeThumbnail(event) {
    // console.log("EVENT::::", event)
    // var copy = {...this.state.selectedStyle}
    // copy.photos.mainImg = styles.results[0]
    this.setState({
      position: event
    })
  }
  extendedView(event) {
    // console.log("EVENT:::", event)
    event.preventDefault()
    // console.log(this.state.extendView)
    this.setState({
      extendView: !this.state.extendView
    })
    if (this.state.extendView) {
      var productInfo = document.getElementById("ProductInfo")
      productInfo.style.display = "block"
    } else {
      var productInfo = document.getElementById("ProductInfo")
      productInfo.style.display = "none"
    }
  }
  magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    moveMagnifier = (e) => {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    getCursorPos = (e) => {
      var a, x = 0, y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
  }
}
  render() {
    var inventory = this.state.selectedStyle.skus ? Object.values(this.state.selectedStyle.skus) : []
    const sizeQuantity = Array.from(Array(this.getSizeQuantity(inventory)).keys()).slice(0, 16)
      return (
        // overview is the container component, flex direction is set to column, so the page reads top to bottom
        <div style={styles.overview} onClick={(e) => {this.props.handleInteraction(e, 'o')}}>
          {/*
            from top to bottom:
            first row "section" includes carousel and product info, style selection
            flex direction set to "row" to read from left to right, carousel and info each taking 50% width
          */}
          <div style={styles.row}>
              <div style={styles.carouselContainer}>
              {
                this.state.selectedStyle.photos &&
                (
                  <div style={styles.carouselContainer}>
                    {/* additional photos */}
                    <div style={styles.extraPhotos}>
                      {this.state.selectedStyle.photos.map((photo, index) => {
                        return (
                          <div key={index} style={styles.extraPhotoContainer}>
                            <img
                              onClick={() => this.changeThumbnail(index)}
                              src={photo.thumbnail_url}
                              position={index}
                              style={styles.extraPhoto}
                              alt="product_image"
                            />
                          </div>
                        )
                      })}
                    </div>
                    {/* selected photo */}
                    <div style={styles.carousel}>
                      <Carousel
                        styles={styles.carouselOverrides}
                        items={this.state.selectedStyle.photos}
                        position={this.state.position}
                         />
                      <img style={styles.toggle} src={'/Assets/toggle.png'} onClick={() => this.extendedView(event)}  ></img>
                    </div>
                    {/* <img></img> */}
                  </div>
                )
              }
            </div>
            <div style={styles.productInfo} id="ProductInfo">
              <div style={styles.rating}>
                  <StarsDisplay starsData={this.state.ratings}/>
                  <a href="#RatingsReviews">Read All Reviews</a>
              </div>
              <p>{this.state.product.category}</p>
              <h1>{this.state.selectedStyle.name}</h1>
              {this.state.selectedStyle.sale_price && <p style={{color: 'red'}}>${this.state.selectedStyle.sale_price}</p>}
              {!this.state.selectedStyle.sale_price && <p>${this.state.selectedStyle.original_price || this.state.product.default_price}</p>}
              <div style={styles.productStyle}>
                <div>
                  <p>Style &gt; {this.state.selectedStyle.name || "Selected Style"}</p>
                </div>
                <div style={styles.colorCircles}>
                  {this.state.styles.map((styleObj, index) => {
                    return <div key={index} onClick={() => this.changeSelectedStyle(index)}>
                      <img style={styles.circle} src={styleObj.photos[0].thumbnail_url}></img>
                    </div>
                  })}
                </div>
                <div>
                  {this.state.styleSelectError ? <p style={styles.errorMsg}>Please Select A Size</p> : <></>}
                  <select name="SelectedSize"
                    value={this.state.selectedSize}
                    style={styles.select}
                    onChange={this.changeSelectedSize}>
                    <option value="Select Size">Select Size</option>
                    {inventory.map((style, index) => {
                      return (style.quantity > 0 ? <option key={index} value={style.size}>{style.size}</option> : <></>
                        )})}
                  </select>
                  <select
                    name="quantity"
                    value={this.state.selectedQuantity}
                    style={styles.select}
                    onChange={this.changeQuantity}
                  >
                  <option value="Quantity">-</option>
                    {sizeQuantity.map((quantity, index) => {
                      return <option key={index} value={quantity}>{quantity}</option>
                    })}
                  </select>
                </div>
                  <div>
                  {
                    this.state.addedToCart ?
                    <p style={styles.addedToCart}>Added To Cart</p> :
                    <button style={styles.addToCartButton} onClick={this.addToCart}>
                      Add To Bag
                    </button>
                    }
                    <div className="sharethis-inline-share-buttons"></div>
                  {/* <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
                  <a className="twitter-share-button"
                  href="https://twitter.com/intent/tweet?text=Hello%20world">
                  Tweet</a>
                  <a href="https://www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark">
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          {/*
            second row "section" includes slogan, description, related items etc
          */}
          <div style={styles.row}>
            <div style={styles.productDetails}>
              <h1>{this.state.product.slogan}</h1>
              <p>{this.state.product.description}</p>
            </div>
          </div>
          </div>
      )
  }
}