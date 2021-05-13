import { mount } from '@vue/test-utils'
import mycom from './mycom.vue'

test('displays message', () => {
  const wrapper = mount(mycom)

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('fasfasfas')
})