import IdleVue from 'idle-vue';
import {EventBus} from 'Helpers/eventBus';

export default ({app, router, store, Vue}) => {
  const options = {eventEmitter: EventBus,
    store,
    idleTime: (process.env.PROD ? 60000 * 10 : 60000 * 60),      // 10 minutes for PROD, 1 hour for DEV
    keepTracking: true,
    startAtIdle: true
  };

  Vue.use(IdleVue, options);
};
