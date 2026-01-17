import { Capabilities, Events, contributes, defineModule, definePlugin } from "@dxos/app-framework"

import { HelloRoot } from "./HelloRoot"
import { meta } from "./meta"
import { translations } from "./translations"

export const HelloPlugin = definePlugin(meta, [
  defineModule({
    id: `${meta.id}/module/translations`,
    activatesOn: Events.SetupTranslations,
    activate: () => contributes(Capabilities.Translations, translations),
  }),
  defineModule({
    id: `${meta.id}/module/root`,
    activatesOn: Events.Startup,
    activate: () =>
      contributes(Capabilities.ReactRoot, {
        id: `${meta.id}/root`,
        root: HelloRoot,
      }),
  }),
])
