import VueApexCharts from 'vue-apexcharts'; // https://github.com/apexcharts/vue-apexcharts

export default ({app, router, store, Vue}) => {
  Vue.use(VueApexCharts);
  Vue.component('apexcharts', VueApexCharts);
};
