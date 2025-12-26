import './About.css';

const doctors = [
  {
    name: 'Dr. Jamal Harouch',
    specialty: 'Spécialiste en Radiologie Médicale',
    description: 'Radiologue privé à Casablanca depuis 1994, le Dr Harouch Jamal apporte une expertise avancée issue de formations prestigieuses en France. Diplômé de la faculté de médecine de Montpellier, France, le Dr Harouch Jamal est ancien praticien hospitalier des hôpitaux de France. Il exerce en radiologie privée à Casablanca depuis 1994. La radiologie médicale utilise des rayons X, ultrasons, IRM et autres technologies pour visualiser l\'intérieur du corps humain. Le Dr Jamal Harouch maîtrise toutes ces techniques pour offrir des examens complets et non invasifs.',
    qualifications: [
      'Docteur en Médecine - Faculté de Montpellier, France',
      'DIU Maladies des Seins - Diplôme Inter-Universitaire',
      'DIU Radiologie Interventionnelle - Générale et Vasculaire',
      'DU IRM - Diplôme Universitaire',
      'Ancien Praticien Hospitalier - Hôpitaux de France'
    ]
  },
  {
    name: 'Dr. El Hammaoui Hanane',
    specialty: 'Spécialiste en Radiologie Médicale',
    description: 'Le Dr El Hammaoui Hanane est une médecin radiologue hautement qualifiée, diplômée de la faculté de médecine et de pharmacie de Marrakech en 2020. Elle a poursuivi sa formation spécialisée avec un DIU de l\'imagerie ostéo articulaire et un DIU d\'imagerie thoracique de l\'université de Paris Cité. Exerçant au Centre de Radiologie Sidi Othmane à Casablanca, elle met son expertise en imagerie médicale au service de ses patients pour réaliser des examens radiologiques précis et adaptés à chaque situation. La radiologie médicale utilise des technologies avancées telles que la radiographie, les ultrasons, la tomodensitométrie (scanner) ou l\'IRM pour visualiser l\'intérieur du corps humain de manière non invasive.',
    qualifications: []
  },
  {
    name: 'Dr. Kouhen Mohamed Jalil',
    specialty: 'Spécialiste en Radiologie Médicale',
    description: 'Le Dr Kouhen Mohamed Jalil est médecin radiologue exerçant au Centre de Radiologie Sidi Othmane à Casablanca. Il est diplômé de la Faculté de Médecine et de Pharmacie de Casablanca, où il a acquis sa formation médicale en imagerie diagnostique. La radiologie médicale permet d\'explorer l\'intérieur du corps humain à l\'aide de technologies non invasives telles que la radiographie, l\'échographie ou le scanner.',
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
