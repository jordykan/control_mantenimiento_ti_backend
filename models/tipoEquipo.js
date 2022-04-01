import mongoose,{Schema} from 'mongoose';

const tipoEquipoSchema = new Schema({
    nombre:{type:String, maxlength:100,unique:true,required:true},

});

const tipoEquipo = mongoose.model('tipoEquipo',tipoEquipoSchema);

export default tipoEquipo;