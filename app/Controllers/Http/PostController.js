'use strict'
const Post = use('App/Models/Post')

class PostController {

  async index ({ request, response }) {
    try {
      return await Post.query().with('author').fetch()       
    } catch (error) {
      response.send({
        error: true,
        message: error.message
      })
    }    
  }

  async show ({ request, response, params }) {
    return await Post.find(params.id)
  }

  async store (){

  }

  async destroy (){

  }

  async update (){

  }

}

module.exports = PostController
