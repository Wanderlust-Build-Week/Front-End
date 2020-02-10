import React from "react";
import { StyledContact } from '../../Styles/StyledContact';
import Anime, {anime} from 'react-anime';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <StyledContact>
      <form className="contactForm"
        onSubmit={this.submitForm}
        action="https://formspree.io/xvoarzpv"
        method="POST"
      >
       <h1> Contact us!</h1>
       <Anime  className="contact-wrapper" easing="easeOutElastic" opacity={[0, 2]} translateY={'1em'} delay={(e, i) => i * 500}>

        <input type="name" name="name" placeholder="Enter your name" />
       
        <input type="email" name="email" placeholder="Enter your Email" />
        
        <input type="textarea" name="message" placeholder="What would you like to say?"/>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}</Anime>
      </form></StyledContact>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}