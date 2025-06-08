import { mount } from '@vue/test-utils';
import {describe, test, expect} from 'vitest';
import HelloWorld from './HelloWorld.vue';

describe('Hello World Tests',()=>{
    test('renders with name prop',()=>{
        const wrapper = mount(HelloWorld,{
            props: {name:'Ayushman'}
        })
        expect(wrapper.text()).toContain('Hello Ayushman');
    })

    test('increment count on button click',async()=>{
        const wrapper = mount(HelloWorld, {
            props: { name: 'Ayushman' }
          });
         const button = wrapper.find('button');
         await button.trigger('click'); 
         await button.trigger('click'); 

         expect(button.text()).toContain('Clicked 2 times');
    })
})

// ✅ Vitest uses Vite’s pipeline
// ✅ Vite needs @vitejs/plugin-vue to understand .vue files
// ✅ We install and configure it in vite.config.js

// Remember
// Step	                Why needed
// jsdom env	        for DOM simulation
// @vitejs/plugin-vue	to compile .vue files in tests


// my-vue-app/
// ├── node_modules/
// ├── public/                    # Static files (favicon, robots.txt, etc.)
// ├── src/
// │   ├── assets/                # Images, CSS, fonts, etc.
// │   ├── components/            # Vue components (.vue)
// │   │   ├── MyComponent.vue
// │   │   ├── MyComponent.test.js (component test, alongside component)
// │   ├── views/                 # Vue views (used in router, typically pages)
// │   ├── store/                 # Pinia stores or Vuex store
// │   ├── utils/                 # Pure JS utils / helper functions
// │   │   ├── my-utils.js
// │   │   ├── my-utils.test.js
// │   ├── App.vue
// │   ├── main.js
// ├── tests/                     # Global test folder (optional — I prefer colocated next to files, but you can have global too)
// │   ├── unit/                  # Unit tests (utils, services)
// │   ├── component/             # Component tests (Vue components)
// ├── vite.config.js
// ├── package.json
// ├── vitest.config.js           # Optional — you can configure in vite.config.js itself
// ├── .gitignore
// ├── README.md


//Remember this
// beforeEach(() => {
//     // fresh Pinia instance for each test
//     setActivePinia(createPinia());
//   });
// setActivePinia and createPinea are from pinea only