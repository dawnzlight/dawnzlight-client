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
    size?: number;
    color?: string;
    subColor?: string;
    onClick?: () => void;
}

export interface Props {
    name: string;
    bg?: string;
    avatar?: string;
    description?: string;
    sns?: Sns[];
    onClick?: () => void;
}
