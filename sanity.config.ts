import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision' // Temporarily disabled due to dependency issue
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Website',

  projectId: '75q7mk6w',
  dataset: 'production',

  plugins: [structureTool(), codeInput()], // Removed visionTool() temporarily

  schema: {
    types: schemaTypes,
  },
}) 