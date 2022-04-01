import mongoose,{Schema} from 'mongoose';

const empresaSchema = new Schema({
    nombre:{type: String, maxlength:100,unique:true,required:true},

});

const Empresa = mongoose.model('empresa',empresaSchema);

export default Empresa;