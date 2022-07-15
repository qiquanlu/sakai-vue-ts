import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import InputDemoViewVue from '@/views/example/InputDemoView.vue'
import DashboardViewVue from './views/example/DashboardView.vue'
import FormLayoutDemoViewVue from './views/example/FormLayoutDemoView.vue'
import FloatLabelDemoViewVue from '@/views/example/FloatLabelDemoView.vue'
import InvalidStateDemoViewVue from '@/views/example/InvalidStateDemoView.vue'
import ButtonDemoViewVue from '@/views/example/ButtonDemoView.vue'
import TableDemoViewVue from '@/views/example/TableDemoView.vue'
import ListDemoViewVue from '@/views/example/ListDemoView.vue'
import TreeDemoViewVue from '@/views/example/TreeDemoView.vue'
import PanelDemoViewVue from '@/views/example/PanelsDemoView.vue'
import OverlayDemoViewVue from '@/views/example/OverlayDemoView.vue'
import MediaDemoViewVue from '@/views/example/MediaDemoView.vue'
import MenuDemoViewVue from '@/views/example/MenuDemoView.vue'
import PersonalDemoVue from '@/views/example/menu/PersonalDemo.vue'
import SeatDemoVue from '@/views/example/menu/SeatDemo.vue'
import PaymentDemoVue from '@/views/example/menu/PaymentDemo.vue'
import ConfirmationDemoVue from '@/views/example/menu/ConfirmationDemo.vue'

import MessagesDemoViewVue from '@/views/example/MessagesDemoView.vue'
import FileDemoViewVue from '@/views/example/FileDemoView.vue'
import ChartDemoViewVue from '@/views/example/ChartDemoView.vue'
import MiscDemoViewVue from '@/views/example/MiscDemoView.vue'
import CrudDemoViewVue from '@/views/example/CrudDemoView.vue'
import TimelineDemoViewVue from '@/views/example/TimelineDemoView.vue'
import EmptyPageViewVue from '@/views/example/EmptyPageView.vue'

import DocumentationViewVue from '@/views/example/DocumentationView.vue'
import BlocksDemoViewVue from '@/views/example/BlocksDemoView.vue'
import IconsDemoViewVue from '@/views/example/IconsDemoView.vue'

import LoginViewVue from '@/views/example/LoginView.vue'
import LandingDemoViewVue from '@/views/example/LandingDemoView.vue'
import ErrorViewVue from '@/views/example/ErrorView.vue'
import NotFoundViewVue from '@/views/example/NotFoundView.vue'
import AccessViewVue from '@/views/example/AccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardViewVue
        },

        {
          path: '/formlayout',
          name: 'formlayout',
          component: FormLayoutDemoViewVue
        },
        {
          path: '/input',
          name: 'input',
          component: InputDemoViewVue
        },
        {
          path: '/floatlabel',
          name: 'floatlabel',
          component: FloatLabelDemoViewVue
        },
        {
          path: '/invalidstate',
          name: 'invalidstate',
          component: InvalidStateDemoViewVue
        },
        {
          path: '/button',
          name: 'button',
          component: ButtonDemoViewVue
        },

        {
          path: '/table',
          name: 'table',
          component: TableDemoViewVue
        },
        {
          path: '/list',
          name: 'list',
          component: ListDemoViewVue
        },
        {
          path: '/tree',
          name: 'tree',
          component: TreeDemoViewVue
        },
        {
          path: '/panel',
          name: 'panel',
          component: PanelDemoViewVue
        },
        {
          path: '/overlay',
          name: 'overlay',
          component: OverlayDemoViewVue
        },
        {
          path: '/media',
          name: 'media',
          component: MediaDemoViewVue
        },

        {
          path: '/menu',
          component: MenuDemoViewVue,
          children: [
            {
              path: '',
              component: PersonalDemoVue
            },
            {
              path: '/menu/seat',
              component: SeatDemoVue
            },
            {
              path: '/menu/payment',
              component: PaymentDemoVue
            },
            {
              path: '/menu/confirmation',
              component: ConfirmationDemoVue
            }
          ]
        },
        {
          path: '/messages',
          name: 'messages',
          component: MessagesDemoViewVue
        },
        {
          path: '/file',
          name: 'file',
          component: FileDemoViewVue
        },
        {
          path: '/chart',
          name: 'chart',
          component: ChartDemoViewVue
        },
        {
          path: '/misc',
          name: 'misc',
          component: MiscDemoViewVue
        },
        {
          path: '/crud',
          name: 'crud',
          component: CrudDemoViewVue
        },
        {
          path: '/timeline',
          name: 'timeline',
          component: TimelineDemoViewVue
        },
        {
          path: '/empty',
          name: 'empty',
          component: EmptyPageViewVue
        },
        {
          path: '/documentation',
          name: 'documentation',
          component: DocumentationViewVue
        },
        {
          path: '/blocks',
          name: 'blocks',
          component: BlocksDemoViewVue
        },
        {
          path: '/icons',
          name: 'icons',
          component: IconsDemoViewVue
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/landing',
      name: 'landing',
      component: LandingDemoViewVue
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorViewVue
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFoundViewVue
    },
    {
      path: '/access',
      name: 'access',
      component: AccessViewVue
    }
  ]
})

export default router
