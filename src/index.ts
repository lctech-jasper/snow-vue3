import './bootstrap'
import {createApp} from 'vue'
import Routers from '~/router'
import App from '~/App.vue'

const app = createApp(App)

const RegdModule = [Routers]

for (const module of RegdModule) {
  app.use(module)
}

app.mount('#app')

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement


// @ts-expect-error: not hot
if (import.meta.hot) {
  // @ts-expect-error: not hot
  import.meta.hot.accept();
  // @ts-expect-error: not hot
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}