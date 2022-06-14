export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'gazzstar/sanity-angular-website'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a882055c3f1024e35b114c',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-website-studio-q3zxpurh',
                  apiId: '94166f16-3565-47e9-b47c-19ae4c778086'
                },
                {
                  buildHookId: '62a882066a559f21fcfc5d6a',
                  title: 'Website',
                  name: 'sanity-angular-website-web-7s4jf92m',
                  apiId: 'f212b533-257c-47c6-82f7-1f84cdc3572d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gazzstar/sanity-angular-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-website-web-7s4jf92m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
