import VueLogger from 'vuejs-logger'; // https://github.com/justinkames/vuejs-logger
//  from within a Vue component - this.$log.debug('test', this.a, 123)

export default ({app, router, store, Vue}) => {
  const isDevelopment = process.env.DEV;

  const options = {
    isEnabled: true,
    logLevel: isDevelopment ? 'debug' : 'error',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: true,
    separator: '|',
    showConsoleColors: true
  };

  Vue.use(VueLogger, options);
};
