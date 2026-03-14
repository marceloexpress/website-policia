import { useState } from "react";

type Vehicle = {
  name: string;
  image: string;
};

type VehicleGroup = {
  title: string;
  vehicles: Vehicle[];
};

const vehicleGroups: VehicleGroup[] = [
  {
    title: "Direção",
    vehicles: [
      { name: "Benefactor Panto", image: "/src/assets/vehicles/direcao1.png" },
      { name: "Turismo Omaggio", image: "/src/assets/vehicles/direcao2.png" },
      { name: "Baller ST-D", image: "/src/assets/vehicles/direcao3.png" },
    ],
  },
  {
    title: "Oficiais",
    vehicles: [
      { name: "Ocelot Jugular", image: "/src/assets/vehicles/oficiais1.png" },
      { name: "Comet S2", image: "/src/assets/vehicles/oficiais2.png" },
      { name: "Baller ST", image: "/src/assets/vehicles/oficiais3.png" },
      { name: "Vapid Caracara", image: "/src/assets/vehicles/oficiais4.png" },
      { name: "Obey 10F Whitebody", image: "/src/assets/vehicles/oficiais5.png" },
    ],
  },
  {
    title: "Chefes",
    vehicles: [
      { name: "Bravado Buffalo", image: "/src/assets/vehicles/chefes1.png" },
      { name: "Vapid Contender", image: "/src/assets/vehicles/chefes2.png" },
      { name: "Obey Omnis", image: "/src/assets/vehicles/chefes3.png" },
      { name: "Lampadati Komoda", image: "/src/assets/vehicles/chefes4.png" },
      { name: "Declasse Granger", image: "/src/assets/vehicles/chefes5.png" },
    ],
  },
  {
    title: "Agentes",
    vehicles: [
      { name: "Nagasaki Outlaw", image: "/src/assets/vehicles/agentes1.png" },
      { name: "Übermacht Rhinehart", image: "/src/assets/vehicles/agentes2.png" },
      { name: "Declasse Vigero ZX", image: "/src/assets/vehicles/agentes3.png" },
      { name: "Albany Cavalcade XL", image: "/src/assets/vehicles/agentes4.png" },
      { name: "Lampadati Cinquemila", image: "/src/assets/vehicles/agentes5.png" },
    ],
  },
  {
    title: "Recrutas",
    vehicles: [
      { name: "Albany V-STR", image: "/src/assets/vehicles/recrutas1.png" },
      { name: "Landstalker XL", image: "/src/assets/vehicles/recrutas2.png" },
    ],
  },
  {
    title: "Outros",
    vehicles: [
      { name: "Konada", image: "/src/assets/vehicles/helicoptero1.png" },
      { name: "Shinobi", image: "/src/assets/vehicles/mota1.png" },
      { name: "Manchez C", image: "/src/assets/vehicles/mota2.png" },
    ],
  },
];

const VehiclesSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  return (
    <section className="viaturas-section section-content">
      <div className="container">
        <h1 className="page-title">Viaturas</h1>

        {vehicleGroups.map((group) => (
          <div key={group.title} className="patente-group">
            <h2 className="patente-group-title">{group.title}</h2>
            <div className="viaturas-grid" style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
              {group.vehicles.map((vehicle) => (
                <div
                  key={vehicle.name}
                  className="viatura-item"
                  onClick={() => setSelectedVehicle(vehicle)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: "4px" }}>{vehicle.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedVehicle && (
          <div
            className="viatura-modal"
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.85)", // fundo escuro
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
            onClick={() => setSelectedVehicle(null)}
          >
            <div
              className="modal-content"
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "12px",
                  fontSize: "28px",
                  color: "#fff",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                onClick={() => setSelectedVehicle(null)}
              >
                ×
              </button>
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // mantém proporção completa
                  borderRadius: "8px",
                }}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "#fff",
                  marginTop: "8px",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                {selectedVehicle.name}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehiclesSection;