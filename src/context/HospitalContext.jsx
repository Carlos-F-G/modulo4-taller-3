import React, { createContext, useContext, useState } from "react";

// Creamos el contexto
const HospitalContext = createContext();

// Hook personalizado para usar el contexto
export const useHospital = () => useContext(HospitalContext);

export const HospitalProvider = ({ children }) => {
  // Estado global para los doctores
  const [doctors] = useState([
    { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología", experience: 10, imageURL: "https://via.placeholder.com/100" },
    { id: 2, name: "Dra. Ana Gómez", specialty: "Pediatría", experience: 8, imageURL: "https://via.placeholder.com/100" },
    { id: 3, name: "Dr. Carlos Ruiz", specialty: "Neurología", experience: 5, imageURL: "https://via.placeholder.com/100" },
  ]);

  // Estado global para los servicios
  const [services] = useState(["Cardiología", "Pediatría", "Radiología", "Traumatología"]);

  // Estado global para las citas
  const [appointments, setAppointments] = useState([]);

  // Función para agregar citas
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <HospitalContext.Provider value={{ doctors, services, appointments, addAppointment }}>
      {children}
    </HospitalContext.Provider>
  );
};
