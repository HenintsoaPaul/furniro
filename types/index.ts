export interface NavLink {
    name: string;
    path: string;
    icon?: string;
}

export interface IconLink {
    icon: object;
    label: string;
}

export interface ImgData {
    src: string;
    alt: string;
}

export interface BrowseCard {
    imgData: ImgData,
    title: string,
}