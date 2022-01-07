import {
    Container,
    Name,
    Username,
    Location

} from './styles'

const UserDetails = props => (
    <Container>
        <Name>{props.name}</Name>
        <Username>{props.login}</Username>
        <Location>{props?.location}</Location>
    </Container>


);

export default UserDetails