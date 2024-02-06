import { SocialSchema } from "./social_links";
import { ProjectSchema } from './projects';
import { WorkExperienceSchema } from './work_experience';
import { SkillSchema } from './skills';
import { PageInfoSchema } from "./page_info";

export const schemaTypes = [PageInfoSchema, SocialSchema, ProjectSchema, WorkExperienceSchema, SkillSchema];

export {
    PageInfoSchema,
    SocialSchema,
    ProjectSchema,
    WorkExperienceSchema,
    SkillSchema
}