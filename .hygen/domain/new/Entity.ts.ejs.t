---
to: <%= abs_path %>/<%= domain_name %>Entity.ts
---
export class <%= domain_name %> {
    constructor(
        public id: number,
        public createdAt: Date,
        public updatedAt: Date,
    ) {}
}