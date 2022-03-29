import express from 'express';
//const express=require('express');
import morgan from 'morgan';
//const morgan=require('morgan');
import cors from 'cors';
//const cors=require('cors');
import path from 'path';
import mongoose from 'mongoose';

//Conexion a la DB MongoDB
mongoose.Promise=global.Promise;
const dbUrl = 'mongodb+srv://cicsagruas2021_:cicsagruas2021_@cicsagruas.laxqr.mongodb.net/dbControlTi?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {useNewUrlParser: true})
.then(mongoose => console.log('Conectado a la BD en el puerto 27017'))
.catch(err => console.log(err));

const app=express();
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')))

app.set('port',process.env.PORT || 3001);

app.listen(app.get('port'),()=>{
    console.log('server on port' + app.get('port'));
});
