import { useState } from 'react';
import './Appointment.css';

interface FormData {
  patient_name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  reason: string;
  message: string;
}

export default function Appointment() {
  const [formData, setFormData] = useState<FormData>({
    patient_name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    reason: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Open phone dialer
    window.location.href = 'tel:+212522594949';

    // Reset form
    setFormData({
      patient_name: '',
      email: '',
      phone: '',
      preferred_date: '',
      preferred_time: '',
      reason: '',
      message: '',
    });

    setLoading(false);
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="section appointment">
      <div className="container">
        <div className="appointment-content">
          <div className="appointment-info">
            <span className="section-badge">Prendre Rendez-vous</span>
              <h2>Planifiez Votre Visite</h2>
              <p className="section-description">
                Prenez rendez-vous pour vos examens d'imagerie en nous appelant directement.
                Le Dr Harouch Jamal offre des services de radiologie précis avec les dernières technologies.
              </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3>Heures d'Ouverture</h3>
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>Samedi : 9h00 - 13h00</p>
                </div>
              </div>


              <div className="info-item">
                <div className="info-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3>Emplacement</h3>
                  <p>Avenue 10 Mars, Salama 3</p>
                  <p>Sidi Othmane, Casablanca, Maroc</p>
                </div>
              </div>
            </div>

            <div className="appointment-call">
              <button onClick={() => window.location.href = 'tel:+212522594949'} className="btn-primary">
                Appeler Maintenant: +212 522 594 949
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
