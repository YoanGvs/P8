  import { useNavigate } from "react-router-dom";
  import PropTypes from "prop-types";
  
  const Card = ({ id, title, cover }) => {
    const cardStyle = {
      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`,
    };

    const navigate = useNavigate();
  
    const handleCardClick = () => {
      navigate(`/logement/${id}`);
    };
  
    return (
      <div className="card"  onClick={handleCardClick} style={cardStyle}>
        <h2>{title}</h2>
      </div>
    );
  };
  
  Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  };
  
  export default Card;  