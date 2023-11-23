import * as components from "../index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KButton: typeof components.Button;
    KInput: typeof components.Input;
    KUpload: typeof components.Upload;
    KShake: typeof components.Shake;
    KLink: typeof components.Link;
  }
}
export {};
