import PropTypes from 'prop-types';

const AvatarPicture = ( { avatar, dimension, favColor } ) => {

    const avatarList = ["baseUser", "blackDog", "brownBear", "cat", "chicken", "giraffe", "gorilla", "lion", "meerkat", "orangeBear", "orangeDog", "panda", "rabbit", "seaLion", "shark", "wolf"];
    var avatarName;

    if (avatar && avatarList.includes(avatar)) {
      avatarName = avatar;
    }
    else {
      avatarName = "baseUser"
    }

    const imageAddress = "./images/avatars/" + avatarName + ".png";

    const pictureWrapperStyle = {
        height: dimension,
        width: dimension
    };
    
    const pictureStyle = {
        height: dimension,
        width: dimension,
        borderRadius: "50%",
        border: `solid 4px ${favColor}`
    };

    return (

      <>
        <div id = "avatarWrapper" style = {pictureWrapperStyle}>
          <img src={imageAddress} alt="Avatar" style={pictureStyle} />
        </div>
      </>

    );
};
  
export default AvatarPicture;  

AvatarPicture.propTypes = {
    avatar: PropTypes.string, 
    dimension: PropTypes.string,
    favColor: PropTypes.string
}