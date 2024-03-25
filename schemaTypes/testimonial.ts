export default {
  title: 'Testimonial',
  name: 'testimonial',
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
      title: 'Project',
      name: 'project',
      type: 'reference',
      to: [{type: 'project'}],
    },
  ],
}
