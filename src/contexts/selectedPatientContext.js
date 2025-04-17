import React, { createContext, useContext, useState } from 'react';
import { useFindPatient } from '../hooks/useFindPatient';

const SelectedPatientContext = createContext();

export const SelectedPatientProvider = ({ children }) => {
  const [selectedName, setSelectedName] = useState('Jessica Taylor');
  const selectedPatient = useFindPatient(selectedName);

  return (
    <SelectedPatientContext.Provider value={{ selectedName, setSelectedName, selectedPatient }}>
      {children}
    </SelectedPatientContext.Provider>
  );
};

export const useSelectedPatient = () => useContext(SelectedPatientContext);
