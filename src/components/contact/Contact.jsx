import "./contact.scss";
import { useState } from "react";

export default function Contact() {
    
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact.jpg" alt="" />
            </div>
             <div className="right1">
                <h2>Contact Me</h2>
                <p>Feel free to get in touch.</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Write your message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
            
        </div>
    )
}
