import aidenImage from '../assets/aiden.jpg'

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const imageStyle = {
    width: '100%',
    borderRadius: '50%',
    maxWidth: '500px',
    // boxShadow: 'rgba(220, 20, 60, 0.5) 0px 7px 29px 0px'
}

const HeroImage = () => {
    return (
        <>
            <div style={containerStyle}>
                <img style={imageStyle} src={aidenImage} alt="Picture of Aiden" />
            </div>
        </>
    )
}

export default HeroImage