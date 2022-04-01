import routerx from 'express-promise-router';
import empresaRouter from './empresa';
import proyectoRouter from './proyecto';
import tipoEquipoRouter from './tipoEquipo';

const router=routerx();

router.use('/empresa',empresaRouter);
router.use('/tipoequipo',tipoEquipoRouter);
router.use('/proyecto',proyectoRouter);

export default router;