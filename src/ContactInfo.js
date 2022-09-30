import ColoredLine from "./ColoredLine";

const ContactInfo = () => {
    return (  
        <div className="contact-info">
            <h2>Contact Me</h2>
            <ColoredLine color='#212529'/>
            <a className='btn btn-lg btn-outline-dark contact-button' href="https://www.linkedin.com/in/ksdisch/">
                LinkedIn
            </a>
            <a className='btn btn-lg btn-outline-dark contact-button' href="https://github.com/ksdisch">
                GitHub
            </a>
            <a className='btn btn-lg btn-outline-dark contact-button' href="mailto:kyledisch@icloud.com">
                Email
            </a>
        </div>
    );
}
 
export default ContactInfo;