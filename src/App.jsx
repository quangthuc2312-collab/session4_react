import { useState } from "react";
import Tier0FirstComponent from "./tiers/Tier0FirstComponent";
import Tier1ReactFlow from "./tiers/Tier1ReactFlow";
import Tier2JsxVariables from "./tiers/Tier2JsxVariables";
import Tier3ComponentSplit from "./tiers/Tier3ComponentSplit";
import Tier4UseStateBasics from "./tiers/Tier4UseStateBasics";
import Tier5EventsBasics from "./tiers/Tier5EventsBasics";
import Tier6ListsCrud from "./tiers/Tier6ListsCrud";
import Tier7TodoApp from "./tiers/Tier7TodoApp";

const tiers = [
  { id: 0, title: "Tier 0", subtitle: "Component", component: <Tier0FirstComponent /> },
  { id: 1, title: "Tier 1", subtitle: "React Flow", component: <Tier1ReactFlow /> },
  { id: 2, title: "Tier 2", subtitle: "JSX Variables", component: <Tier2JsxVariables /> },
  { id: 3, title: "Tier 3", subtitle: "Component Split", component: <Tier3ComponentSplit /> },
  { id: 4, title: "Tier 4", subtitle: "useState", component: <Tier4UseStateBasics /> },
  { id: 5, title: "Tier 5", subtitle: "Events", component: <Tier5EventsBasics /> },
  { id: 6, title: "Tier 6", subtitle: "Lists CRUD", component: <Tier6ListsCrud /> },
  { id: 7, title: "Tier 7", subtitle: "Todo App", component: <Tier7TodoApp /> }
];

function App() {
  const [activeTier, setActiveTier] = useState(0);
  const selectedTier = tiers.find((tier) => tier.id === activeTier);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>React Basics</h1>
        <p>Làm theo README: học từ dễ đến khó, mỗi Tier một kiến thức.</p>
        <div className="tier-menu">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={activeTier === tier.id ? "selected" : ""}
            >
              <span>{tier.title}</span>
              <small>{tier.subtitle}</small>
            </button>
          ))}
        </div>
      </aside>

      <main className="content">
        {selectedTier.component}
      </main>
    </div>
  );
}

export default App;
