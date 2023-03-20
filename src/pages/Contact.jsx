import "../assets/css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contactInfo">
        <div>
          <h4>Address</h4>
          <p>
            1234 Younge Street,
            <br />
            ON, A1B 2CD
          </p>
        </div>
        <div>
          <h4>Email</h4>
          <p>abcdefg@gmail.com</p>
        </div>
        <div>
          <h4>Phone</h4>
          <p>+1(123)456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
