import lodash from "lodash";

export class ObjectUtils {
  public isEqual(object1: any, object2: any) {
    return lodash.isEqual(object1, object2);
  }
}

export const objectUtils = new ObjectUtils();
