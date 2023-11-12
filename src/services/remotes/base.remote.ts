import type { Api } from "@/plugins/axios.plugin";
import { api } from "@/plugins";

export abstract class BaseRemoteService {
  protected api: Api;

  public constructor() {
    this.api = api;
  }
}
