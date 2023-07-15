export default [
  {
    children: [
      {
        name: 'HomeView',
        path: '/',
        component:  import('../views/HomeView'),
      },{
        name: 'GelleryView',
        path: '/Gellery',
        component:  import('../views/Gellery'),
      },{
        name: 'tetsView',
        path: '/test',
        component:  import('../views/testView'),
      },{
        name: 'singleGalleryView',
        path: '/singleGallery',
        component:  import('../views/SingleGallery'),
      },
      {
        name: 'blogView',
        path: '/blog',
        component:  import('../views/Blog'),
      }
      ,
      {
        name: 'contactView',
        path: '/contact',
        component:  import('../views/Contact'),
      }
    ]
  },
]
