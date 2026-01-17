import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { useApp } from "@dxos/app-framework"
import "./index.css"
import { HelloPlugin, meta } from "./plugin"

const Main = () => {
  const App = useApp({
    plugins: [HelloPlugin],
    core: [meta.id],
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
