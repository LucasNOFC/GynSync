import React, { useEffect } from "react";

const Confirm = ({ action, toggleMenu }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
        document.removeEventListener("keydown", handleEsc);
    }
  }, [toggleMenu]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="relative bg-[#141414] p-8 flex flex-col items-center gap-5 rounded-2xl">
        <button onClick={toggleMenu} className="absolute top-3 right-3 text-lg">
          ×
        </button>

        <p>
          Confirma a ação de <span>{action}</span> ?
        </p>

        <button className="p-3 bg-yellow-600 rounded-2xl cursor-pointer">
          Confirmo
        </button>
      </div>
    </div>
  );
};

export default Confirm;
