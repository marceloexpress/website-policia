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
      { name: "Benefactor Panto", image: "/vehicles/direcao1.png" },
      { name: "Turismo Omaggio", image: "/vehicles/direcao2.png" },
      { name: "Baller ST-D", image: "/vehicles/direcao3.png" },
    ],
  },
  {
    title: "Oficiais",
    vehicles: [
      { name: "Ocelot Jugular", image: "/vehicles/oficiais1.png" },
      { name: "Comet S2", image: "/vehicles/oficiais2.png" },
      { name: "Baller ST", image: "/vehicles/oficiais3.png" },
      { name: "Vapid Caracara", image: "/vehicles/oficiais4.png" },
      { name: "Obey 10F Whitebody", image: "/vehicles/oficiais5.png" },
    ],
  },
  {
    title: "Chefes",
    vehicles: [
      { name: "Bravado Buffalo", image: "/vehicles/chefes1.png" },
      { name: "Vapid Contender", image: "/vehicles/chefes2.png" },
      { name: "Obey Omnis", image: "/vehicles/chefes3.png" },
      { name: "Lampadati Komoda", image: "/vehicles/chefes4.png" },
      { name: "Declasse Granger", image: "/vehicles/chefes5.png" },
    ],
  },
  {
    title: "Agentes",
    vehicles: [
      { name: "Nagasaki Outlaw", image: "/vehicles/agentes1.png" },
      { name: "Übermacht Rhinehart", image: "/vehicles/agentes2.png" },
      { name: "Declasse Vigero ZX", image: "/vehicles/agentes3.png" },
      { name: "Albany Cavalcade XL", image: "/vehicles/agentes4.png" },
      { name: "Lampadati Cinquemila", image: "/vehicles/agentes5.png" },
    ],
  },
  {
    title: "Recrutas",
    vehicles: [
      { name: "Albany V-STR", image: "/vehicles/recrutas1.png" },
      { name: "Landstalker XL", image: "/src/assets/vehicles/recrutas2.png" },
    ],
  },
  {
    title: "Outros",
    vehicles: [
      { name: "Konada", image: "/vehicles/helicoptero1.png" },
      { name: "Shinobi", image: "/vehicles/mota1.png" },
      { name: "Manchez C", image: "/vehicles/mota2.png" },
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
              backgroundColor: "rgba(0,0,0,0.85)",
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
                  objectFit: "contain",
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
