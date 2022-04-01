import routerx from 'express-promise-router';
import proyectoController from '../controllers/ProyectoController';


const router=routerx();

router.post('/add',proyectoController.add);
router.get('/query',proyectoController.query);
router.get('/list',proyectoController.list);
router.put('/update',proyectoController.update);
router.delete('/remove',proyectoController.remove);
router.put('/activate',proyectoController.activate);
router.put('/deactivate',proyectoController.deactivate);

export default router;
