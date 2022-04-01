import mongoose,{Schema} from 'mongoose';

const proyectoSchema = new Schema({
    nombre:{type:String, maxlength:100,unique:true,required:true},
    empresa_id:{type: Schema.ObjectId, ref:'empresa'},

});

const proyecto = mongoose.model('proyecto',proyectoSchema);

export default proyecto ;