import PropTypes from "prop-types";

const Card = ({ avatar, firstName, lastName, email }) => {
  return (
    <div className="card">
      <img src={avatar} alt="Avatar" style={{ width: "100px" }} />
      <div className="details">
        <h4>
          {firstName} {lastName}
        </h4>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  avatar: PropTypes.string.isRequired, // Add prop-type validation for 'avatar' prop
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Card;
