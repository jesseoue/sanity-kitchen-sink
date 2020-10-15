export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f87faf823cdfaa5bed3de0f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-1f9sz9q7',
                  apiId: '079d116d-0a68-481a-b5a8-225b61c0d6f0'
                },
                {
                  buildHookId: '5f87faf9ab244da9dbbf364a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rgc8fg6j',
                  apiId: 'e32f323b-ad51-4d7d-b69f-9ad5b76e4712'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jesseoue/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rgc8fg6j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
