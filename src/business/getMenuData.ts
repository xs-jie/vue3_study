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
    }
  ]
}
