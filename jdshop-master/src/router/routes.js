// 路由路径配置
import Home from '@/views/home'
import Category from '@/views/category'
import SubCategory from '@/views/category/Subcategory'
import List from '../views/list'
import Detail from '../views/detail'
import Cart from '../views/cart'
import Mine from '../views/mine'
import Login from '../views/login'
import Register from '../views/register'
import Tabbar from '@/components/Tabbar'
import SearchHeader from '@/components/SearchHeader'
import TitleHeader from '@/components/TitleHeader'

// 路由路径数组
const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },

  {
    path: '/home',
    // component: Home
    components: {
      header: SearchHeader,
      default: Home,
      footer: Tabbar
    },
    meta: {
      isNav: true,
      title: '首页',
      icon: '&#xe608;'
    }
  },
  {
    path: '/category',
    // component: Category
    components: {
      header: TitleHeader,
      default: Category,
      footer: Tabbar
    },
    children: [{
      path: 'sub/:id',
      component: SubCategory,
      meta: {
        title: '二级分类'
      }
    }],
    meta: {
      isNav: true,
      title: '分类',
      icon: '&#xe65c;'
    }
  },
  {
    path: '/list',
    components: {
      header: TitleHeader,
      default: List
    },
    meta: {
      title: '商品列表'
    }
  },
  {
    path: '/detail',
    components: {
      header: TitleHeader,
      default: Detail
    },
    meta: {
      title: '商品详情'
    }
  },
  {
    path: '/cart',
    components: {
      header: TitleHeader,
      default: Cart
    },
    meta: {
      isNav: true,
      title: '购物车',
      icon: '&#xe605;'
    }
  },
  {
    path: '/mine',
    // component: Mine
    components: {
      header: TitleHeader,
      default: Mine,
      footer: Tabbar

    },
    meta: {
      isNav: true,
      title: '我的 ',
      icon: '&#xe66c;'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
    }
  }
]

export default routes
