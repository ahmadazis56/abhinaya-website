declare module 'react-simple-maps' {
  import * as React from 'react';

  export interface ComposableMapProps {
    children?: React.ReactNode;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotation?: [number, number, number];
    };
    width?: number;
    height?: number;
    style?: React.CSSProperties;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;

  export interface GeographiesProps {
    children: (geographies: {
      geographies: any[];
      projection: any;
    }) => React.ReactNode;
    geography?: string;
  }

  export const Geographies: React.FC<GeographiesProps>;

  export interface GeographyProps {
    geography: any;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  }

  export const Geography: React.FC<GeographyProps>;
}
