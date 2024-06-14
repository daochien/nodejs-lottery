const service = require('@services/user.service');

class userController {
    index = (req, res) => {
        res.send("api list all users!");
    }

    register = async (req, res) => {
        try {
            const user = await service.doRegister(req.body);
            res.send(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new userController()