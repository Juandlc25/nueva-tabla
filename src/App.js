import "./App.css";
import CustomTable from "./components/customTable";
import Header from "./components/header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <div className="main-content">
          <div className="main-content-name">
            <label>Nombre</label>
            <input
              type="text"
              className="main-content-input"
              placeholder="Person"
            />
          </div>
          <div className="main-content-description">
            <label>Descripción</label>
            <input
              type="textarea"
              className="main-content-textarea"
              placeholder="Tabla usada para x y z"
            />
          </div>
        </div>
        <CustomTable
          title="Atributos"
          headerTitles={[
            "Nombre",
            "Tipo",
            "Descripción",
            "Constrains",
            "Delete",
          ]}
        />
        <CustomTable
          title="Relaciones"
          headerTitles={[
            "Tabla",
            "Tipo",
            "Descripción",
            "Constrains",
            "Delete",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
