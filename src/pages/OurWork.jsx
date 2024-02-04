import React from "react";
import nutrition from '../assets/images/nutrition.jpg';
import joyKids from '../assets/images/joy-children.jpg';
import education from '../assets/images/education.jpg';

const OurWork = () => {
   return (
      <div className="container">
         <h1 style={{
            textAlign: 'center',
            padding: '1em'
         }}>Ce que Nous Faisons:</h1>
         <div className="travail">
            <div className="humanitaire">
               <h2 className="lead" style={{
                  textAlign: 'center',
                  fontWeight: '600', 
                  padding: '1em'
               }}>Activites Humanitaires</h2>
               <p><abbr title="Charity For Development">CHAFORD</abbr> International, is a non profit organization created in 2023 during the war caused by M23 rebellions in the eastern region of the Republic Democratic of the Congo.</p>
               <p>With a variety of entrepreneurial activities, in education and agrobusiness through the chaford Training center and Chaford agrobis, Chaford internatinal has other branches that help fund diverse activities designed to address specific causes of extreme poverty in communities across the subsaharian countries. These programmes are guided by these seven thematiques focus areas: Education, Heal and Nutrition, Peace Building, Gender Equality, Emergecies, Climate and Environment, Evangelism</p>
               <div className="travail-card">
                  <div className="card">
                     <img src={joyKids} alt="" />
                     <div>
                        <div className="h4">Education | Evangelisation</div>
                        <p>CHAFORD has a set of activities designed to protect children in refugees camps against gender based violence, sexual exploitation and abuse. Therefore, 10 gender committees have been installed to protect and signal to the local authorities every case of violence</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="entreprenariat">
               <h1 className="lead" style={{
                  textAlign: 'center',
                  fontWeight: '600', 
                  padding: '1em'
               }}>Entreprenauriat</h1>
               <p>
                  L'une des visions primordiales de CHAFORD est de parvenir à l'auto-financement de l'ensemble de ses activités, tout en offrant un accompagnement aux autres organisations de la société civile à but non lucratif. Dans cette perspective, CHAFORD propose une gamme diversifiée d'activités.
                  À Goma, nous mettons en place des séances de préceptorat visant à répondre aux besoins des parents désireux d'améliorer les compétences de leurs enfants en lecture, écriture et calcul. Ces séances sont accompagnées par des enseignants qualifiés et des psychologues afin de remédier aux troubles d'apprentissage, garantissant ainsi la maîtrise et la compréhension des leçons par les élèves et les étudiants.
                  Nos projets tels que FARDE (Farming for Development) ont pour objectif d'accroître la production avicole (œufs, poulets) afin de lutter contre la malnutrition. Par ailleurs, CHAFORD Kivu Transport facilite les déplacements dans la ville de Goma et ses environs, tout en assurant les déplacements du personnel et des volontaires lors des activités de CHAFORD. Les fonds collectés grâce à ces initiatives sont entièrement dédiés au financement des activités humanitaires de CHAFORD.
               </p>
            </div>
         </div>
      </div>
   );
};

export default OurWork;