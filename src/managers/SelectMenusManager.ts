import { Collection } from 'discord.js';
import { BaseManager } from '.';
import { loadFiles } from '../utils/loadFiles';
import type { ShewenyClient, SelectMenu } from '..';
import type { BaseManagerOptions } from '../typescript/interfaces';

/**
 * Manager for Select Menus
 */
export class SelectMenusManager extends BaseManager {
  /**
   * Collection of the select menus
   * @type {Collection<string[], SelectMenu> | undefined}
   */
  public selectMenus?: Collection<string[], SelectMenu>;

  /**
   * Constructor to manage select menus
   * @param {ShewenyClient} client Client framework
   * @param {string} directory Directory of the select menus folder
   * @param {boolean} [loadAll] If the select menus are loaded during bot launch
   */
  constructor(client: ShewenyClient, options: BaseManagerOptions) {
    super(client, options);

    if (options?.loadAll) this.loadAll();
    client.managers.selectMenus = this;
  }

  /**
   * Load all select menus in collection
   * @returns {Promise<Collection<string[], SelectMenu>>}
   */
  public async loadAll(): Promise<Collection<string[], SelectMenu> | undefined> {
    const selectMenus = await loadFiles<string[], SelectMenu>(this.client, {
      directory: this.directory,
      key: 'customId',
      manager: this,
    });
    if (selectMenus) this.client.collections.selectMenus = selectMenus;
    this.selectMenus = selectMenus;
    return selectMenus;
  }
}
