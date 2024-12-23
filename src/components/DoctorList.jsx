import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const mockDoctors = [
      { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología", experience: 10, imageURL: "public/images/hombre-del-médico-89752915.webp" },
      { id: 2, name: "Dra. Ana Gómez", specialty: "Pediatría", experience: 8, imageURL: "https://via.placeholder.com/100" },
      { id: 3, name: "Dr. Carlos Ruiz", specialty: "Neurología", experience: 5, imageURL: "https://via.placeholder.com/100" },
    ];
    setDoctors(mockDoctors);
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
