import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'lococo-sanity',

  projectId: 'utfyduj3',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')

          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title('about')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),

            S.documentTypeListItem('post').title('post'),
            S.documentTypeListItem('project').title('project'),
            S.documentTypeListItem('slider').title('slider'),
            S.documentTypeListItem('service').title('service'),
            S.documentTypeListItem('testimonial').title('testimonial'),
            S.documentTypeListItem('texture').title('texture'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
