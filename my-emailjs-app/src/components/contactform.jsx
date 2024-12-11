import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_1snfekr',    // EmailJS da yaratilgan Service ID
      'template_xp4n5ls',   // EmailJS da yaratilgan Template ID
      form.current, 
      'wE0wYYKZtfTAzVl_e'     // EmailJS Public Key
    )
    .then((result) => {
      console.log('Message sent:', result.text);
      alert('Xabar muvaffaqiyatli yuborildi!');
    }, (error) => {
      console.log('Error:', error.text);
      alert('Xabar yuborishda xatolik yuz berdi.');
    });

    e.target.reset(); // Formani tozalash
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Ismingiz:</label>
      <input type="text" name="user_name" required />

      <label>Emailingiz:</label>
      <input type="email" name="user_email" required />

      <label>Xabaringiz:</label>
      <textarea name="message" required />

      <button type="submit">Yuborish</button>
    </form>
  );
};

export default ContactForm;
