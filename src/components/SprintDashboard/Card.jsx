import Container from "../UI/Container";
import Text from "../UI/Text";



const Card = ({card}) => {
    retunr (
        <Container
            display='flex'
            flexDirection='column'
            padding='10px'
            border='1px solid #DEEBFA'
            >
            <Container>
                <Text>{card.name}</Text>
            </Container>
        </Container>
    )
}

export default Card;