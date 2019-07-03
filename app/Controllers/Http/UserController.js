'use strict'
const User = use('App/Models/User')

class UserController {

    async index(){
        return User.query().with('posts').fetch()
    }
}

module.exports = UserController
