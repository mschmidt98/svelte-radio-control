export class CurrentState {
    status: "play" | "pause" | "stop";
    title?: string;
    artist?: string;
    albumart: string;
    station: string;
    volume?: number;
    mute?: boolean;
}