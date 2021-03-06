import { Fragment } from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import pic from "../../assets/photo_2021-12-30_12-45-04.jpg";

const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props.data;
  return (
    <Fragment>
      <div className="profile">
        <img src={avatar ? avatar : pic} alt="User avatar" className="avatar" />
        <div className="description">
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className="stats">
          <li>
            <span className="label">Followers:</span>
            <span className="quantity">{stats.followers}</span>
          </li>
          <li>
            <span className="label">Views:</span>
            <span className="quantity">{stats.views}</span>
          </li>
          <li>
            <span className="label">Likes:</span>
            <span className="quantity">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Profile;

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
