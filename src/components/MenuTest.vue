<template>
  <div>
    <wrapper>
      <q-btn label="Click for menu" slot="wrapper" >
        <q-menu @show="testShowListen" @hide="testHideListen" @before-hide="testBeforeHide" @before-show="testBeforeShow">
          <q-list separator>
            <q-item>
              <q-item-section>
                <p>Item 1</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item 2</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <p>Item ?</p>
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </wrapper>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  components: {
    'wrapper': () => import('./Wrapper')
  },
  data () {
    return {}
  },
  methods: {
    testShowListen () {
      console.log('show menu')
    },

    testHideListen () {
      console.log('hide menu')
    },

    testBeforeHide () {
      console.log('before hide')
    },

    testBeforeShow () {
      console.log('before show')
    }
  }
}
</script>

<style>
</style>
