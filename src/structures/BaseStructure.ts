import type { ShewenyClient } from "../";
/**
 * The base class for all structures
 */
export abstract class BaseStructure {
  public client: ShewenyClient;
  public path?: string;

  /**
   * Constructor for build base of any structures
   * @param {ShewenyClient} client Client framework
   * @param {string} [path] Path for the structure
   */
  constructor(client: ShewenyClient | any, path?: string) {
    this.client = client as ShewenyClient;
    this.path = path;
  }
}
