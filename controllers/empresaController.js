import { listen } from 'express/lib/application';
import { reset } from 'nodemon';
import models from '../models';
export default {
    add: async (req,res,next) =>{
        try{
            const reg = await models.Empresa.create(req.body);
            res.status(200).json(reg);
        } catch (e){
            res.status(500).send({
                message:'Error'
            });
            next(e);
        }

    },
    query: async (req,res,next) =>{
        try{
            const reg =await models.Empresa.findOne({_id:req.query._id});
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                });
            } else{
                res.status(200).json(reg);
            }
        } catch (e){
            res.status(200).send({
                message:'Error'
            });
            next(e);
        }
    },
    list: async (req,res,next) =>{
        try{
            const reg=await models.Empresa.find({});
            res.status(500).json(reg);
            
        } catch (e){
            res.status(200).send({
                message:'Error'
            });
            next(e);
        }
    },
    update: async (req,res,next) =>{
        try{
            const reg =await models.Empresa.findByIdAndUpdate({_id:req.body._id},{nombre:req.body.nombre});
            res.status(200).json(reg);
        } catch (e){
            res.status(200).send({
                message:'Error'
            });
            next(e);
        }
    },
    remove: async (req,res,next) =>{
        try{
            const reg = await models.Empresa.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
        } catch (e){
            res.status(200).send({
                message:'Error'
            });
            next(e);
        }
    },
    activate: async (req,res,next) =>{
        try{
            const reg = await models.Empresa.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch (e){
            res.status(200).send({
                message:'Error'
            });
            next(e);
        }
    },
    deactivate: async (req,res,next) =>{
        try{
            const reg = await models.Empresa.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e){
            res.status(200).send({
                message:'Error'
            });
            next(e);
        }
    },

}