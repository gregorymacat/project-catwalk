import React from 'react';
import StarsForm from '../../Shared/StarsForm';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: 0,
      rating: 0,
      summary: '',
      body: '',
      recommended: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if(e.target.name === "recommended-yes") {
      this.setState({
        'recommended': true
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render(){
    if (this.props.display) {
      return (
        <div className='modal-body'>
          <div className='modal-content'>
            <span id='close' className='fa fa-times' onClick={this.props.click}></span>
            <span>Click on the "x" to close the modal</span>
            <div className="modal-body-content">
              <div className="modal-body-overall-rating">
                Please select your rating (1 star = "Poor", 5 stars = "Great")
                <StarsForm />
              </div>
              <div className="modal-body-recommended">
                <p>Would you recommended this product?</p>
                <input type="radio" id="yes" name="recommended" value={true} onChange={this.handleChange}></input> Yes
                <input type="radio" id="yes" name="recommended" value={false} onChange={this.handleChange}></input> No
              </div>
              <div className="modal-body-summary">
                <label for="summary">Review:</label><br></br>
                <input type="text" id="summary" name="summary" placeholder="Example: Best purchase ever!" maxlength="60" value={this.state.value} onChange={this.handleChange}></input>
              </div>
              <div className="modal-body-body">
                <label for="body"></label><br></br>
                <textarea type="text" id="body" name="body" placeholder="Why did you like the product or not?" maxlength="250" value={this.state.value} onChange={this.handleChange}></textarea>
              </div>
              <div className="modal-body-img">
                <label for="img">Select image:</label>
                <input type="file" id="img" name="photos" accept="image/*" value={this.state.value} onChange={this.handleChange}></input>
              </div>
              <div className="modal-body-nickname">
                <label for="nickname">Nickname:</label><br></br>
                <input type="text" id="nickname" name="nickname" placeholder="Example: jackson11!" maxlength="60" value={this.state.value} onChange={this.handleChange}></input>
              </div>
              <div className="modal-body-email">
                <label for="email">Email:</label><br></br>
                <input type="email" id="email" name="email" placeholder="Example: jackson11@email.com" maxlength="60" value={this.state.value} onChange={this.handleChange}></input>
              </div>
              <button onSubmit={this.handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }
}

export default Modal;
