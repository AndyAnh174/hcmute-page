declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";
  import { Options } from "@splidejs/splide";

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    className?: string;
    children?: ReactNode;
  }

  export interface SplideTrackProps {
    className?: string;
    children?: ReactNode;
  }

  export interface SplideSlideProps {
    className?: string;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideTrack: ComponentType<SplideTrackProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

