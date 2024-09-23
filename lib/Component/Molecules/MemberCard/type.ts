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

export interface Props {
    name: string;
    bg?: string;
    avatar?: string;
    description?: string;
    sns?: Sns[];
    onClick?: () => void;
}
