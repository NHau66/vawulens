import SectionHead from './SectionHead';
import FAQ from './FAQ';

import { FaQuestion } from 'react-icons/fa';

import { faqs } from '../data';

const FAQs = () => {
    return (
        <section className="faqs">
            <div className="container faqs__container">
                <SectionHead icon={<FaQuestion />} title="FAQS" />
                <div className="faqs__wrapper">
                    {faqs.map(({ id, question, answer }) => {
                        return <FAQ key={id} question={question} answer={answer} />;
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
