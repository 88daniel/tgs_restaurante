<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Response;
use Datetime;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $d = new DateTime("now");
            //code...
            $insertar = DB::table('users')->insertGetId([
                'nombre' => $request['nombre'],
                'apellido' => $request['apellido'],
                'alias' => $request['alias'],
                'password' => $request['password'],
                'is_active' => 'true',
                'rol_id' => 1,
                'created_at' => $d,
                'email' => $request['email'],
            ]);

            return Response::json([
                'id' => $insertar,
                'apellido' => $request['apellido'],
                'alias' => $request['alias'],
                'password' => $request['password'],
                'is_active' => 'true',
                'rol_id' => 1,
                'created_at' => $d,
                'email' => $request['email'],
            ], 200);
        } catch (\Illuminate\Database\QueryException $ex) {
            //throw $th;
            return Response::json([
                'error' => $ex->getMessage()
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    // validar credenciales desde la plataforma web
    public function validarCredenciales(Request $request) {
        try {

            $usuario = DB::table('users')
                ->join('stores', 'users.id','=','stores.user_id')
                ->select('users.*','stores.id as store_id','stores.nombre as store')
                ->where('alias','=',$request['alias'])
                ->where('password','=', $request['password'])
                ->first();

            return response()->json($usuario);

        } catch (\Illuminate\Database\QueryException $ex) {
            return Response::json([
                'error' => $ex->getMessage()
            ], 201);
        }

    }
}
