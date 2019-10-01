<?php

use Illuminate\Http\Request;
Use App\Links;
Use App\Data;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::get('link', function() {
//   return Links::all();
// });

Route::get('links/{userId}', function($userId) {
  return Links::find($userId);
});

Route::post('link', function(Request $request) {
  return Links::create($request->all);
});

// Route::put('link/{id}', function(Request $request, $id) {
//   $links = Links::findOrFail($id);
//   $links->update($request->all());

//   return $links;
// });

// Route::delete('link/{id}', function($id) {
//   Links::find($id)->delete();

//   return 204;
// });
