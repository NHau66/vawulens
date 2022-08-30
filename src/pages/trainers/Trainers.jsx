import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './trainers.css';
import Trainer from '../../components/Trainer';

const Trainers = () => {
    return (
        <>
            <Header title="Our Trainers" image={HeaderImage}>
                Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut
                molestiae fugit doloremque suscipit quod.
            </Header>
            <section className="trainers">
                <div className="container trainers__container">
                    {trainers.map(({ id, image, name, job, socials }) => {
                        return (
                            <Trainer
                                key={id}
                                image={image}
                                name={name}
                                job={job}
                                socials={[
                                    { icon: <AiFillInstagram />, link: socials[0] },
                                    { icon: <AiOutlineTwitter />, link: socials[1] },
                                    { icon: <FaFacebookF />, link: socials[2] },
                                    { icon: <FaLinkedin />, link: socials[3] },
                                ]}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Trainers;
