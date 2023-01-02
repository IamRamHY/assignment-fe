import { iUser } from '../../types'
import './profile-card.scss';

interface iProps {
    data: iUser
}

function ProfileCard(props: iProps): JSX.Element {
    const { 
        id,
        first_name,
        last_name,
        email,
        gender,
        city,
     } = props.data

    return (
        <div className='profileCard' key={id}>
            <div className='avatar'>
                <span className='profilePic'/>
                <div className='username'>{first_name} {last_name}</div>
            </div>
            <div className="meta">
                <div>
                    <span>Email: </span>
                    <span>{email}</span>
                </div>
                <div>
                    <span>Gender: </span>
                    <span>{gender}</span>
                </div>
                <div>
                    <span>City: </span>
                    <span>{city}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard