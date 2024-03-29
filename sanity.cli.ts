import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'utfyduj3',
    dataset: 'production',
  },
  graphql: [
    {
      playground: true,
      id: 'gatsby',
    },
  ],
})
