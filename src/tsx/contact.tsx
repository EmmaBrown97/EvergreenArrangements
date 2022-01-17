import emailjs from 'emailjs-com'
import './../css/contact.css'

function Contact() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_1divvnb', 'template_e2bbimm', e.target, 'user_OttdSPNzVKUCOj9rHl4Kv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return  (
        <div>
            <h2 className='title'>Send me an Email!</h2>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="name_div">
                        <div className="name_div">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="email_div">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="subject_div">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="message_div">
                            <textarea className="form-control" id="" cols={30} rows={8} placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="send_div">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
    </div>
    )
}

export default Contact;