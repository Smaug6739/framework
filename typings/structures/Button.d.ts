import type { EmojiIdentifierResolvable } from "discord.js";
import type { ShewenyClient } from "../index";
export interface IButtonMeta {
    description?: string;
    style: "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER" | "LINK";
    disabled?: boolean;
    emoji?: EmojiIdentifierResolvable;
    label?: string;
}
export declare class Button {
    client: any;
    path?: string;
    customId: string[];
    description?: string;
    style: "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER" | "LINK";
    disabled?: boolean;
    emoji?: EmojiIdentifierResolvable;
    label?: string;
    constructor(client: ShewenyClient, customId: string[], options: IButtonMeta);
    unregister(): boolean;
    reload(): Promise<any>;
    register(): Promise<any>;
}
