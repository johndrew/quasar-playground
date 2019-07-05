<template>
    <div>
        <h1>Close</h1>
        <div>
            <h1 class="foo">Click for menu</h1>
            <q-menu @show="testShowListen" @hide="testHideListen" @before-hide="testBeforeHide" @before-show="testBeforeShow">
            <q-list separator>
                <q-item>
                <q-item-section>Your Profile</q-item-section>
                </q-item>
                <q-item>
                <q-item-section>Your Notification Preferences</q-item-section>
                </q-item>
                <q-item>
                <q-item-section>Sign Out</q-item-section>
                </q-item>
            </q-list>
            </q-menu>
        </div>
    </div>
</template>

<script>
export default {
  // name: 'ComponentName',
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

    testBeforeShow (event) {
      console.log('befo3re show')
      console.log(event)
    }
  }
}
</script>

<style>
.foo {
  margin-top: 300px;
}
</style>
