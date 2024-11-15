
import patient from "/patient.js"
import administrateurC from "/administrateurC.js"
import salleConsultation from "/salleConsultation.js"
import docteur from "/docteur.js"
import rendezVous from "/rendezVous.js"
import servMedDocteur from "/servMedDocteur.js"


// Relations pour la table rendez vous
docteur.hasMany(rendezVous, { foreignKey: 'id_Docteur' });
rendezVous.belongsTo(docteur, { foreignKey: 'id_Docteur' });

patient.hasMany(rendezVous, { foreignKey: 'id_Patient' });
rendezVous.belongsTo(patient, { foreignKey: 'id_Patient' });

administrateurC.hasMany(rendezVous, { foreignKey: 'id_Admin' });
rendezVous.belongsTo(administrateurC, { foreignKey: 'id_Admin' });

salleConsultation.hasMany(rendezVous, { foreignKey: 'id_Salle' });
rendezVous.belongsTo(salleConsultation, { foreignKey: 'id_Salle' });



//export default rendezVous;

//


// Associations entre docteur, serviceMedical et servMedDocteur
docteur.hasMany(servMedDocteur, { foreignKey: 'id_Docteur' });
serviceMedical.hasMany(servMedDocteur, { foreignKey: 'id_Service' });
servMedDocteur.belongsTo(docteur, { foreignKey: 'id_Docteur' });
servMedDocteur.belongsTo(serviceMedical, { foreignKey: 'id_Service' });





//export default servMedDocteur;
export default {
    patient,
    administrateurC,
    salleConsultation,
    docteur,
    rendezVous,
    servMedDocteur
  };