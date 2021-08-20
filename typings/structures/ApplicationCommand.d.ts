import { Collection } from "collection-data";
import { ApplicationCommandData, CommandInteraction } from "discord.js";
import { ShewenyClient } from "../ShewenyClient";
export interface IApplicationCommandMeta {
    category: string;
    only?: "GUILD" | "DM";
    cooldown?: number;
    userPermissions?: string[];
    botPermissions?: string[];
}
/**
 * Represent a Application Command
 * @class Application Command structure
 * @abstract
 */
export declare abstract class ApplicationCommand {
    client: any;
    path?: string;
    data: ApplicationCommandData;
    category: string;
    only: "GUILD" | "DM";
    cooldown: number;
    userPermissions: string[];
    botPermissions: string[];
    /**
     * @constructor
     * @param {ShewenyClient} client - The client
     * @param {ApplicationCommandData} data - Application Command data
     */
    constructor(client: ShewenyClient, data: ApplicationCommandData, options: IApplicationCommandMeta);
    before?(interaction: CommandInteraction): any | Promise<any>;
    abstract execute(interaction: CommandInteraction): any | Promise<any>;
    /**
     * Unregister a application command
     * @public
     * @returns {boolean}
     */
    unregister(): boolean;
    /**
     * Reload a Application Command
     * @public
     * @async
     * @returns {Promise<Collection<string, ApplicationCommand> | null>} The Application Commands collection
     */
    reload(): Promise<Collection<string, ApplicationCommand> | null>;
    /**
     * Register a Application Command
     * @public
     * @async
     * @returns {Collection<string, ApplicationCommand>} The Application Commands collection
     */
    register(): Promise<Collection<string, ApplicationCommand>>;
}
