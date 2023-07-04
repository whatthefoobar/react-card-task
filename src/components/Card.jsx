import PropTypes from "prop-types";

const Card = ({ avatar, firstName, lastName }) => {
  return (
    <div className="card">
      <img src={avatar} alt="Avatar" style={{ width: "100px" }} />
      <div>
        {firstName} {lastName}
      </div>
    </div>
  );
};

Card.propTypes = {
  avatar: PropTypes.string.isRequired, // Add prop-type validation for 'avatar' prop
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Card;
