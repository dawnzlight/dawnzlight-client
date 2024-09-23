export interface Props {
    /**
     * カテゴリー
     */
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
    /**
     * それぞれのリンク
     */
    url: string;
    /**
     * アイコンのサイズ
     */
    size?: number;
    /**
     * アイコンの色
     */
    color?: string;
    /**
     * セカンドアイコンの色
     */
    subColor?: string;
    /**
     * クリックハンドラー
     */
    onClick?: () => void;
}
