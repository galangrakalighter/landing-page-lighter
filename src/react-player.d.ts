import { Component, ReactElement, ComponentType } from 'react';

declare module 'react-player' {
    export interface SourceProps {
        src: string;
        type: string;
    }

    export interface ReactPlayerProps {
        url?: string | string[] | SourceProps[] | MediaStream;
        playing?: boolean;
        loop?: boolean;
        controls?: boolean;
        volume?: number;
        muted?: boolean;
        playbackRate?: number;
        width?: string | number;
        height?: string | number;
        style?: object;
        progressInterval?: number;
        playsinline?: boolean;
        pip?: boolean;
        stopOnUnmount?: boolean;
        light?: boolean | string;
        playIcon?: ReactElement;
        previewTabIndex?: number;
        fallback?: ReactElement;
        oEmbedConfig?: object;
        config?: Record<string, unknown>; // Mengganti any dengan Record untuk config
        [key: string]: unknown; // Mengganti any dengan unknown untuk index signature
    }
    
    export default class ReactPlayer extends Component<ReactPlayerProps> {}
}

declare module 'react-player/youtube' {
    const ReactPlayer: ComponentType<{
        url?: string | string[];
        width?: string | number;
        height?: string | number;
        controls?: boolean;
        playing?: boolean;
        [key: string]: unknown;
    }>;
    export default ReactPlayer;
}

declare module 'react-player/lazy' {
    const ReactPlayer: ComponentType<{
        url?: string | string[];
        width?: string | number;
        height?: string | number;
        controls?: boolean;
        playing?: boolean;
        [key: string]: unknown;
    }>;
    export default ReactPlayer;
}