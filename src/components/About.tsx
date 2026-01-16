import './About.css';

const doctors = [
  {
    name: 'Dr. Jamal Harouch',
    specialty: 'Spécialiste en Radiologie Médicale',
    description: 'Radiologue privé à Casablanca depuis 1994, le Dr Harouch Jamal apporte une expertise avancée issue de formations prestigieuses en France. Diplômé de la faculté de médecine de Montpellier, France, le Dr Harouch Jamal est ancien praticien hospitalier des hôpitaux de France. Il exerce en radiologie privée à Casablanca depuis 1994. La radiologie médicale utilise des rayons X, ultrasons, IRM et autres technologies pour visualiser l\'intérieur du corps humain. Le Dr Jamal Harouch maîtrise toutes ces techniques pour offrir des examens complets et non invasifs.',
    qualifications: []
  },
  {
    name: 'Dr. El Hammaoui Hanane',
    specialty: 'Spécialiste en Radiologie Médicale',
    description: 'Le Dr El Hammaoui Hanane est une médecin radiologue hautement qualifiée, diplômée de la faculté de médecine et de pharmacie de Marrakech en 2020. Elle a poursuivi sa formation spécialisée avec un DIU de l\'imagerie ostéo articulaire et un DIU d\'imagerie thoracique de l\'université de Paris Cité. Exerçant au Centre de Radiologie Sidi Othmane à Casablanca, elle met son expertise en imagerie médicale au service de ses patients pour réaliser des examens radiologiques précis et adaptés à chaque situation. La radiologie médicale utilise des technologies avancées telles que la radiographie, les ultrasons, la tomodensitométrie (scanner) ou l\'IRM pour visualiser l\'intérieur du corps humain de manière non invasive.',
    qualifications: []
  },
  {
    name: 'DR KOUHEN MOHAMED JALIL',
    specialty: 'Spécialiste en radiologie et imagerie',
    description: 'Le docteur Kouhen Mohamed Jalil est médecin radiologue exerçant au centre de Sidi Othman à Casablanca. Il est diplômé de la faculté de médecine de Monastir, ancien interne et ancien résident en Tunisie, ancien médecin attaché à l\'hôpital de Marrakech. Ces domaines de prédilection sont la radiologie interventionnelle (biopsies), l\'imagerie digestive et urogénitale. La radiologie médicale permet grâce aux ultrasons, rayons X au champ magnétique de visualiser le corps humain de façon non invasive.',
    qualifications: []
  }
];

export default function About() {
  return (
    <section id="doctors" className="section doctors">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Nos Médecins</span>
          <h2>Équipe Médicale Spécialisée</h2>
          <p className="section-description">
            Découvrez notre équipe de radiologues expérimentés, dédiés à fournir des soins de qualité
            et des diagnostics précis à nos patients.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="doctor-header">
                <h3>{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
              </div>
              <div className="doctor-description">
                <p>{doctor.description}</p>
              </div>
              {doctor.qualifications.length > 0 && (
                <div className="doctor-qualifications">
                  <h4>Qualifications:</h4>
                  <ul>
                    {doctor.qualifications.map((qual, idx) => (
                      <li key={idx}>{qual}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
