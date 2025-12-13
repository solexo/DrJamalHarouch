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

    // Construct email content
    const subject = encodeURIComponent('Demande de Rendez-vous pour Examen');
    const body = encodeURIComponent(`
Nom: ${formData.patient_name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Date préférée: ${formData.preferred_date}
Heure préférée: ${formData.preferred_time}
Raison: ${formData.reason}
Message: ${formData.message}
    `);

    // Create mailto URL
    const mailtoUrl = `mailto:jharouch@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;

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
               Prenez rendez-vous pour vos examens d'imagerie. Le Dr Harouch Jamal offre des services
               de radiologie précis et des interprétations fiables avec les dernières technologies.
             </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Heures d'Ouverture</h4>
                  <p>Lundi - Vendredi : 9h00 - 18h00</p>
                  <p>Samedi : 9h00 - 14h00</p>
                </div>
              </div>


              <div className="info-item">
                <div className="info-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Emplacement</h4>
                  <p>Avenue 10 Mars, Salama 3</p>
                  <p>Sidi Othmane, Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          <div className="appointment-form-container">
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label htmlFor="patient_name">Nom Complet *</label>
                <input
                  type="text"
                  id="patient_name"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Adresse Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Numéro de Téléphone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferred_date">Date Préférée *</label>
                  <input
                    type="date"
                    id="preferred_date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    min={minDate}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferred_time">Heure Préférée *</label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionner l'heure</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reason">Raison de la Visite *</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionner la raison</option>
                  <option value="General Checkup">Radiographie Standard</option>
                  <option value="Follow-up">Échographie</option>
                  <option value="New Patient">Scanner CT</option>
                  <option value="Chronic Condition">IRM</option>
                  <option value="Acute Illness">Mammographie</option>
                  <option value="Other">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Notes Supplémentaires (Optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                ></textarea>
              </div>

              {error && <div className="alert alert-error">{error}</div>}

              <button type="submit" className="btn-primary btn-full" disabled={loading}>
                {loading ? 'Soumission...' : 'Prendre Rendez-vous pour Examen'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
