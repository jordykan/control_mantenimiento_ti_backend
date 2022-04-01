import routerx from 'express-promise-router';
import tipoEquipoController from '../controllers/tipoEquipoController';

const router=routerx();
router.post('/add',tipoEquipoController.add);
router.get('/query',tipoEquipoController.query);
router.get('/list',tipoEquipoController.list);
router.put('/update',tipoEquipoController.update);
router.delete('/remove',tipoEquipoController.remove);
router.put('/activate',tipoEquipoController.activate);
router.put('/deactivate',tipoEquipoController.deactivate);


export default router;