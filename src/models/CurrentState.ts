export class CurrentState {
    status: PlayState;
    title?: string;
    artist?: string;
    albumart: string;
    station: string;
    volume?: number;
    mute?: boolean;
}

export type PlayState = 'play' | 'pause' | 'stop';
