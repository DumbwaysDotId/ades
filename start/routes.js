'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/login', 'AuthController.login')

  Route.get('/posts', 'PostController.index').middleware('auth')
  Route.get('/post/:id', 'PostController.show')

  Route.get('/users', 'UserController.index')
}).prefix('api/v1')
