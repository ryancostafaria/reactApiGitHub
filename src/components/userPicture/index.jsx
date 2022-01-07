import React from 'react'
import { useHistory } from 'react-router-dom'

import  {
    Container,
    ProfilePicture

} from './styles'

const UserPicture = props => {

    const history = useHistory()
    const handleOnClick = route => history.push(route)

    return (
    <Container>
        <ProfilePicture onClick={() => handleOnClick('/repos')} src={props.url} alt={props.alternativeText} />
    </Container>


);
}

export default UserPicture


