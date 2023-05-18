import * as React from "react";
import "./stackedCarousel.scss";
interface TReactStackedPhotos {
    width?: number;
    height?: number;
    children: React.ReactElement[];
    onClick?: () => void;
}
export declare const ReactStackedPhotos: React.ForwardRefExoticComponent<TReactStackedPhotos & React.RefAttributes<HTMLDivElement>>;
export {};
