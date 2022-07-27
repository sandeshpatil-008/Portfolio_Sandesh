import React, { useRef, useState ,useContext} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { themeContext } from "./Context";


const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setdone] = useState();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ky8qqab', 'template_727wmak', form.current, 'TFkRPibYnZ4WaYmr9')
            .then((result) => {
                console.log(result.text);
                setdone(true)
            }, (error) => {
                console.log(error.text);
            });
            
    }
    return (
        <div className='contact-form' id="contact">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color:darkMode? 'white':'',}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className='blur' style={{ background: "#C1F5FF", top: "10rem", width: "21rem", height: "11rem", left: "-10rem" }}></div>

                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' style={{ fontFamily: "times" }} />
                    <input type="email" name='user_email' className='user' placeholder='Email' style={{ fontFamily: "times" }} />
                    <textarea name='message' className='user' placeholder='Message'></textarea>
                    <input type="submit" value="send" className="button" style={{ width: "90px",marginBottom:"2rem" }} />
                    <span>{done && "Thanks For Contacting Me!"}</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)", top: "5rem" }}></div>
                </form>
            </div>

        </div>
    );
};

export default Contact;