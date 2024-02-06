import { type SchemaTypeDefinition } from 'sanity'
import { PageInfoSchema, SocialSchema, ProjectSchema, WorkExperienceSchema, SkillSchema } from './schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [PageInfoSchema, SocialSchema, ProjectSchema, WorkExperienceSchema, SkillSchema],
}
