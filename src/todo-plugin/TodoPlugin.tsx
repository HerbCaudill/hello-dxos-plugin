import { Capabilities, Events, contributes, defineModule, definePlugin } from "@dxos/app-framework"

import { meta } from "./meta"
import { TodoRoot } from "./TodoRoot"
import { translations } from "./translations"

export const TodoPlugin = definePlugin(meta, [
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
        root: TodoRoot,
      }),
  }),
])
