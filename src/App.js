import './App.css';
import { Navbar } from './components/Navbar';
import { PatientList } from './components/PatientList';
import { DiagnosisSection } from './components/DiagnosisSection';
import { ProfileLabRes } from './components/ProfileLabRes';
import {PatientProvider} from './contexts/patientRequest';
import { SelectedPatientProvider } from './contexts/selectedPatientContext';  

function App() {
  

  return (
    <div className="App">
        <PatientProvider>
        <SelectedPatientProvider>
        <Navbar />
        <div className="container">
          <div className="content">
            <PatientList />
            <DiagnosisSection />
            <ProfileLabRes />
          </div>
        </div>
        </SelectedPatientProvider>
        </PatientProvider>
    </div>
  );
}

export default App;
