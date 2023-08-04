import './Slide.scss'
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function Slide({name, title, description, img}) {
  return (
    <motion.div 
        whileInView={{x:[100,0], opacity:[0,1]}}
        transition={{duration:0.5}}
        className="slide">
        <div className="col-1">
            <div className="pic">
                <img src={img} alt="profile pic" />
            </div>
        </div>
        <div className="col-2">
            <p>
                &ldquo; {description} &rdquo;
            </p>
            <div className="info">
                <h2 className="name">{name}</h2>
                <h3 className="title">{title}</h3>
            </div>
        </div>
    </motion.div>
  )
}

Slide.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.any.isRequired,
  };

export default Slide