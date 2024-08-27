export interface Props {
    /**
     * アバターの名前
     */
    name: string;
    /**
     * アバターアイコンとなるパスあるいはURL
     */
    iconPath?: string;
    /**
     * アバターサイズ
     */
    size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    /**
     * アバターカラー
     */
    bg?: string;
    /**
     * クリックハンドラー
     */
    onClick?: () => void;
}
