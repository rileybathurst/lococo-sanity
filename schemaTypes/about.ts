export default {
  title: 'About',
  name: 'about',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Make it catchy',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Tell us about yourself',
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Tag Line',
      name: 'tagline',
      type: 'text',
    },
  ],
}
