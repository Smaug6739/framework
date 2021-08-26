import type { ShewenyClient } from "../";

/**
 * Represent a Base of any structure
 * @class BaseStructure
 * @abstract
 */
export abstract class BaseStructure {
  client: ShewenyClient;
  path?: string;
  constructor(client: ShewenyClient, path?: string) {
    this.client = client;
    this.path = path;
  }
}
