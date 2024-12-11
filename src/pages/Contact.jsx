import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import Footer from '../features/Footer/Footer';
import Nav from '../features/Nav/Nav';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    < Nav/>
    <div className="contact-container">
      
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us using the form below.</p>
      <p>We value your feedback and will get back to you as soon as possible.</p>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>Back</button>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
     <Footer />
     </>
  );
};

export default Contact;