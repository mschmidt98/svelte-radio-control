export class StateDto {
    status: "play" | "pause" | "stop";
    title: string;
    artist: string;
    albumart: string;
    uri: string;
    seek: number;
    channels: number;
    bitrate: string;
    volume: number;
    mute: boolean;
    stream: boolean
}