import React from 'react'
import styles from './styles.js'
// import testStyle from './dummy-style.js';
// import Carousel from './components/Shared/Carousel/Carousel.jsx';

export default class Overview extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      // overview is the container component, flex direction is set to column, so the page reads top to bottom
      <div style={styles.overview}>
        {/*
          from top to bottom:
          first row "section" includes carousel and product info, style selection
          flex direction set to "row" to read from left to right, carousel and info each taking 50% width
        */}
        <div style={styles.row}>
          <div style={styles.carousel}>Carousel</div>
          <div style={styles.productInfo}>
            <p style={styles.rating}>****</p>
            <p>{this.props.product.category}</p>
            <h1>{this.props.product.name}</h1>
            <p>${this.props.product.default_price}</p>
            <div style={styles.productStyle}>
              <div>
                <p>style &gt; selected style</p>
              </div>
              <div style={styles.colorCircles}>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div>
                <div style={styles.circle}></div>
              </div>
              <div>
                <select name="cars" style={styles.select}>
                  <option value="value1">value1</option>
                  <option value="value2">value2</option>
                  <option value="value3">value3</option>
                  <option value="value4">value4</option>
                </select>
                <select name="cars" style={styles.select}>
                  <option value="value1">value1</option>
                  <option value="value2">value2</option>
                  <option value="value3">value3</option>
                  <option value="value4">value4</option>
                </select>
                <select name="cars" style={styles.select}>
                  <option value="value1">value1</option>
                  <option value="value2">value2</option>
                  <option value="value3">value3</option>
                  <option value="value4">value4</option>
                </select>
                <select name="cars" style={styles.select}>
                  <option value="value1">value1</option>
                  <option value="value2">value2</option>
                  <option value="value3">value3</option>
                  <option value="value4">value4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/*
          second row "section" includes slogan, description, related items etc
        */}
        <div style={styles.row}>
          <div style={styles.productDetails}>
            <h1>{this.props.product.slogan}</h1>
            <p>{this.props.product.description}</p>
          </div>
        </div>
      </div>
    );
    // return (
    //   <div className="overview">
    //     <div className="carousel">

    //     </div>
    //     <div className="product-info">
    //       <div className="product-name">
    //         {this.props.product.name}
    //       </div>
    //       <div className="price">
    //         {this.props.product.default_price}
    //       </div>
    //     </div>
    //     <div className="slogan">
    //       {this.props.product.slogan}
    //     </div>
    //   </div>
    // )
  }
}

