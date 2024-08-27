---
to: <%= abs_path %>/<%= domain_name %>Repository.ts
---

import { AxiosClient } from '@/Infrastructure'
import { <%= domain_name %>Response, <%= domain_name %>Factory } from './<%= domain_name %>Factory'
import { <%= domain_name %> } from './<%= domain_name %>Entity'

export class <%= domain_name %>Repository {
    static async get(id: number): Promise<<%= domain_name %>> {
        const res = await AxiosClient().get<<%= domain_name %>Response>(
            ``,
        )
        return <%= domain_name %>Factory.createFromResponse(res.data)
    }
}