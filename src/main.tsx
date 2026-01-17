import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { useApp } from "@dxos/app-framework"
import { ClientPlugin, meta as clientMeta } from "@dxos/plugin-client"
import "./index.css"
import { HelloPlugin, meta as helloMeta } from "./plugin"
import { TodoPlugin, meta as todoMeta } from "./todo-plugin"

const Main = () => {
  const App = useApp({
    plugins: [
      ClientPlugin({
        onClientInitialized: async (_context, client) => {
          // Create identity if none exists
          if (!client.halo.identity.get()) {
            await client.halo.createIdentity()
          }
        },
      }),
      HelloPlugin,
      TodoPlugin,
    ],
    core: [clientMeta.id, helloMeta.id, todoMeta.id],
    placeholder: () => (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    ),
  })

  return <App />
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
