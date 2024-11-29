import { Title } from '@mantine/core';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
};

const GreetingMessage = () => {
    return (
        <>
            <div style={containerStyle}>
                <Title style={titleStyle}>Hi, I'm Aiden &#128075;</Title>
                <Title style={titleStyle}>I'm a Frontend Developer</Title>
            </div>
        </>
    )
}

export default GreetingMessage