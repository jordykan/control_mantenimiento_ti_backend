import routerx from 'express-promise-router';
import baseController from '../controllers/baseController';


const router=routerx();

router.post('/add',baseController.add);
router.get('/query',baseController.query);
router.get('/list',baseController.list);
router.put('/update',baseController.update);
router.delete('/remove',baseController.remove);
router.put('/activate',baseController.activate);
router.put('/deactivate',baseController.deactivate);

export default router;
