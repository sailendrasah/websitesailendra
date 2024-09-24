import { useState } from "react";
import "./Contact.css";
function Contact() {
  let [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    msg: "",
  });
  function InputEvent(event) {
    let { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
  function formSumit(e) {
    e.preventDefault();
    alert(
      `my nami is ${data.fullName},my phone no is ${data.phone},my email is ${data.email}and msg is ${data.msg}`
    );
  }
  return (
    <div className="header">
      <h1>contact us</h1>
      <form>
        <input
          type="name"
          placeholder="Enter your name"
          name="fullName"
          value={data.fullName}
          onChange={InputEvent}
        />
        <input
          type="phone"
          placeholder="Enter your phone number"
          name="phone"
          value={data.phone}
          onChange={InputEvent}
        />
        <input
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter your Email"
          onChange={InputEvent}
        />
        <input
          type="msg"
          name="msg"
          value={data.msg}
          placeholder="Enter your message"
          onChange={InputEvent}
        />
        <button onClick={formSumit} className="btn">
          Sumit
        </button>
      </form>
    </div>
  );
}
export default Contact;
