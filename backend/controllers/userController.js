const registerUser = async(req, res) => {
    try {
        res.send('register api'); 
    } catch (error) {
        console.log(error);
    }
}

export default registerUser;