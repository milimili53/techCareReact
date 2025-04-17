import { usePatients } from '../contexts/patientRequest';
import { useMemo } from 'react';

export const useFindPatient = (name) => {
  const  patients  = usePatients();

  /*
  const foundPatient = patients?.find((patient) => patient.name === name); // ← ? sprečava grešku

return foundPatient || null;
*/

return useMemo(() => {
  
  return patients.find((p) => p.name === name) || null;
}, [name, patients]);
  };
