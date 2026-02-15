import { z } from 'zod';
import { insertProjectSchema, insertSkillSchema, insertExperienceSchema, insertProfileSchema } from './schema';

export const api = {
  profile: {
    get: {
      method: 'GET' as const,
      path: '/api/profile' as const,
      responses: {
        200: insertProfileSchema,
      },
    },
  },
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects' as const,
      responses: {
        200: z.array(insertProjectSchema),
      },
    },
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills' as const,
      responses: {
        200: z.array(insertSkillSchema),
      },
    },
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience' as const,
      responses: {
        200: z.array(insertExperienceSchema),
      },
    },
  },
  contact: {
    send: {
      method: 'POST' as const,
      path: '/api/contact' as const,
      input: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        message: z.string().min(10),
      }),
      responses: {
        200: z.object({ success: z.boolean() }),
      },
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
