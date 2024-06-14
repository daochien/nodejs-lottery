const UserRepository = require('@repositories/user.repository');
const {User} = require('@models');
class UserService {
    constructor(repository) {
        this.repository = repository;
    }

    doRegister = async (params) => {
        try {
            return await this.repository.create(params);
        } catch (error) {
            throw new Error('Error registering user');
        }
    }
}

const userRepository = new UserRepository(User);
module.exports = new UserService(userRepository);