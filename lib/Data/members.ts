interface Sns {
    category:
        | 'discord'
        | 'facebook'
        | 'github'
        | 'instagram'
        | 'linkdin'
        | 'qiita'
        | 'x'
        | 'youtube'
        | 'zenn';
    url: string;
}
export const MEMBERS = [
    {
        name: 'CoCo9122',
        src: 'coco9122.jpg',
        externalLinks: [
            {
                category: 'github' as Sns['category'],
                url: 'https://github.com/CoCo9122',
            },
            {
                category: 'linkdin' as Sns['category'],
                url: 'https://www.linkedin.com/in/coco9122',
            },
            {
                category: 'zenn' as Sns['category'],
                url: 'https://zenn.dev/coco9122',
            },
        ],
    },
    {
        name: 'Mario_3412',
        externalLinks: [],
    },
];
