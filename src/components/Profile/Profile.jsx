import propTypes from 'prop-types';
import s from './Profile.module.css'
const Profile = (prop) => {
    const { name, tag, location, image, stats } = prop;
    return (
        <div className={s.profile}>
            <div >
                <img className={s.imgProfile}
                    src={image}
                    alt="User avatar"
                />
                <div className={s.textProfile}>
                    <p className={s.bold}>{name}</p>
                    <p className={s.paragraphProfile}>@{tag}</p>
                    <p className={s.paragraphProfile}>{location}</p>
                </div>
            </div>

            <ul className={s.listProfile}>
                <li className={s.itemProfile}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li className={s.itemProfile}>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={s.itemProfile}>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    name: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    image: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired
    }).isRequired
};

export default Profile;