
class UserRepository {
    constructor(model) {
        this.model = model;
    }
    create = async (params) => {
        try {
            return await this.model.create(params);
        } catch (error) {
            console.log(error)
            throw new Error('Error creating user');
        }
    }
}

module.exports = UserRepository;