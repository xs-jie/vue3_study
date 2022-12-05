export interface menuData {
  key: string
  path: string
  children?: Array<menuData>
  name: string
  icon: string
}

export function getMenuData(): Array<menuData> {
  return [
    {
      name: '菜单一',
      key: '1',
      path: 'content1',
      icon: 'icon1',
      children: [
        {
          key: '1',
          name: '1-1',
          path: 'content1-1',
          icon: 'icon1-1'
        }
      ]
    },
    {
      name: '菜单二',
      key: '2',
      path: 'content2',
      icon: 'icon2'
    },
    {
      name: '菜单三',
      key: '3',
      path: 'content3',
      icon: 'icon3'
    },
    {
      name: '菜单四',
      key: '4',
      path: 'content4',
      icon: 'icon4'
    },
    {
      name: 'vue3: v-modal进行父子组件间数据的绑定',
      key: '5',
      path: 'content5',
      icon: 'icon5'
    },
    {
      name: 'vue3: 使用store',
      key: '6',
      path: 'content6',
      icon: 'icon6'
    }
  ]
}
