import mongoose,{Schema} from 'mongoose';

const baseSchema = new Schema({
    nombre:{type:String, maxlength:100,unique:true,required:true},
    empresa_id:{type: Schema.ObjectId, ref:'empresa'},

});

const base = mongoose.model('base',baseSchema);

export default base ;