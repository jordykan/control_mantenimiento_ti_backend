import routerx from 'express-promise-router';
import empresaRouter from './empresa';
import proyectoRouter from './proyecto';
import tipoEquipoRouter from './tipoEquipo';
import baseRouter from './controllers/base';

const router=routerx();

router.use('/empresa',empresaRouter);
router.use('/tipoequipo',tipoEquipoRouter);
router.use('/proyecto',proyectoRouter);
router.use('/base',baseRouter);

export default router;