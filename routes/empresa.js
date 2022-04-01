import routerx from 'express-promise-router';
import empresaController from '../controllers/empresaController';


const router=routerx();

router.post('/add',empresaController.add);
router.get('/query',empresaController.query);
router.get('/list',empresaController.list);
router.put('/update',empresaController.update);
router.delete('/remove',empresaController.remove);
router.put('/activate',empresaController.activate);
router.put('/deactivate',empresaController.deactivate);

export default router;
