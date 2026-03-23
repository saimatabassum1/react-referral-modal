import React, { useState } from "react";
import ReferModal from "./ReferModal/ReferModal";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {!open && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f5efe8",
          }}
        >
          <button
            onClick={() => setOpen(true)}
            style={{
              padding: "14px 28px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "10px",
              border: "none",
              background: "#db1627",
              color: "#fff",
              cursor: "pointer",
              boxShadow: "0px 10px 25px rgba(255, 78, 58, 0.25)",
            }}
          >
            Open Refer Modal
          </button>
        </div>
      )}

      {open && <ReferModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default App;