interface Glassmorphism {
    blur?: number;
    color?: string;
    opacity?: number;
}

export const glassmorphism = (props?: Glassmorphism) => `
    background-color: rgba(${props?.color || '255, 255, 255'}, ${props?.opacity || '.1'});
    backdrop-filter: blur(${props?.blur || 12}px);
`