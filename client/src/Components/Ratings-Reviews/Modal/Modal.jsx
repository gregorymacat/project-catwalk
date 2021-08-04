import React from "react";
import StarsForm from "../../Shared/StarsForm";
import { postAReview } from "../../../../Controllers/ratings-reviews";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      rating: 0,
      summary: "",
      body: "",
      recommend: false,
      name: "",
      email: "",
      photos: [],
      characteristics: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "recommend") {
      this.setState({
        recommend: true,
      });
    } else if (e.target.id === "characteristic") {
      this.setState({
        characteristics: {
          ...this.state.characteristics,
          [e.target.name.toString()]: parseInt(e.target.value),
        },
      });
    } else if (e.target.name === "photos") {
      if (this.state.photos.length <= 5) {
        this.setState({
          photos: [...this.state.photos, e.target.value],
        });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    postAReview(this.state, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }

  handleClick(starsFormData) {
    this.setState({
      rating: starsFormData,
    });
  }

  render() {
    if (this.props.display) {
      return (
        <div className="modal-review-body">
          <div className="modal-review-content">
            <span
              id="close"
              className="fa fa-times"
              onClick={this.props.click}
            ></span>
            <span>Click on the "x" to close the modal</span>
            <h2>Write Your Review</h2>
            <form>
              <div className="modal-body-overall-rating">
                Please select your rating (1 star = "Poor", 5 stars = "Great")
                <StarsForm modalCallback={this.handleClick} />
              </div>
              <div className="modal-body-recommended">
                <p>Would you recommend this product?</p> {" "}
                <input
                  type="radio"
                  id="yes"
                  name="recommend"
                  value={true}
                  onChange={this.handleChange}
                  required
                ></input>{" "}
                Yes  {" "}
                <input
                  type="radio"
                  id="no"
                  name="recommend"
                  value={false}
                  onChange={this.handleChange}
                ></input>{" "}
                No
              </div>
              <div className="modal-body-characteristics">
                <p>Please rate these characteristics (1 - Poor, 5 - Great)</p>
                {Object.keys(this.props.characteristics).map((char, index) => {
                  return (
                    <div key={index} className="modal-body-characteristics">
                      <p>{char}</p> {" "}
                      <input
                        type="radio"
                        id="characteristic"
                        name={this.props.characteristics[char].id}
                        value={1}
                        onChange={this.handleChange}
                        required
                      ></input>{" "}
                      1  {" "}
                      <input
                        type="radio"
                        id="characteristic"
                        name={this.props.characteristics[char].id}
                        value={2}
                        onChange={this.handleChange}
                      ></input>{" "}
                      2
                      <input
                        type="radio"
                        id="characteristic"
                        name={this.props.characteristics[char].id}
                        value={2}
                        onChange={this.handleChange}
                      ></input>{" "}
                      3  {" "}
                      <input
                        type="radio"
                        id="characteristic"
                        name={this.props.characteristics[char].id}
                        value={4}
                        onChange={this.handleChange}
                      ></input>{" "}
                      4
                      <input
                        type="radio"
                        id="characteristic"
                        name={this.props.characteristics[char].id}
                        value={5}
                        onChange={this.handleChange}
                      ></input>{" "}
                      5
                    </div>
                  );
                })}
              </div>
              <div className="modal-body-summary">
                <label htmlFor="summary">Review:</label>
                <br></br>
                <input
                  type="text"
                  id="summary"
                  name="summary"
                  placeholder="Example: Best purchase ever!"
                  maxLength="60"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="modal-body-body">
                <label htmlFor="body"></label>
                <br></br>
                <textarea
                  type="text"
                  id="body"
                  name="body"
                  placeholder="Why did you like the product or not?"
                  maxLength="250"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                ></textarea>
              </div>
              <div className="modal-body-img">
                <label htmlFor="img">Select image:</label>
                <input
                  type="file"
                  id="img"
                  name="photos"
                  accept="image/*"
                  value={this.state.value}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="modal-body-name">
                <label htmlFor="name">Name:</label>
                <br></br>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Example: jackson11!"
                  maxLength="60"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <div className="modal-body-email">
                <label htmlFor="email">Email:</label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Example: jackson11@email.com"
                  maxLength="60"
                  value={this.state.value}
                  onChange={this.handleChange}
                  required
                ></input>
              </div>
              <button
                type="button"
                value="Submit"
                id="close"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Modal;
