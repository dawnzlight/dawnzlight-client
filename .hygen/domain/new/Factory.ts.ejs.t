---
to: <%= abs_path %>/<%= domain_name %>Factory.ts
---

import { <%= domain_name %> } from './<%= domain_name %>Entity'

export interface <%= domain_name %>Response {
    id: number,
    created_at: string,
    updated_at: string,
}

export class <%= domain_name %>Factory {
    static createFromResponse(res: <%= domain_name %>Response): <%= domain_name %> {
        return new <%= domain_name %>(
            res.id,
            new Date(res.created_at),
            new Date(res.updated_at),
        )
    }

    static toResponse(<%= domain_name.toLowerCase() %>: <%= domain_name %>): <%= domain_name %>Response  {
        return {
            id: <%= domain_name.toLowerCase() %>.id,
            'created_at': <%= domain_name.toLowerCase() %>.createdAt.toISOString(),
            'updated_at': <%= domain_name.toLowerCase() %>.updatedAt.toISOString(),
        }
    }
}