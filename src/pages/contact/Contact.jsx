import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Quisquam id tenetur adipisci nesciunt ipsum amet in quibusdam, architecto nostrum nobis, est, deserunt
                odio illum perspiciatis.
            </Header>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:nguyenhau65466@gmail.com" target="_blank" rel="noreferrer noopener">
                            <MdEmail />
                        </a>
                        <a href="https://www.messenger.com/" target="_blank" rel="noreferrer noopener">
                            <BsMessenger />
                        </a>
                        <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer noopener">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
