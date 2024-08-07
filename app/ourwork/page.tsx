// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import { nutrition, joyKids, education, materials } from '../../data/Images';
// import './ourwork.css';

export default function OurWork() {
   return (
      <main>



         <div className="travail my-5">
            <h2 className="mb-4 text-center">Qui sommes-nous et Ce que Nous Faisons:</h2>
            <div>
               <div>
                  <p>CHAFORD International est une organisation à but non lucratif créée en 2023 pendant la guerre causée par les rébellions du M23 dans la région est de la République démocratique du Congo.
                     Avec une variété d'activités entrepreneuriales dans l'éducation et l'agrobusiness à travers le Centre de Formation Chaford et Chaford Agrobis, Chaford International dispose d'autres branches qui aident à financer diverses activités visant à adresser les causes spécifiques de l'extrême pauvreté dans les communautés à travers les pays subsahariens. Ces programmes sont guidés par sept domaines thématiques : Éducation, Santé et Nutrition, Consolidation de la Paix, Égalité des Genres, Urgences, Climat et Environnement, Évangélisation.</p>
               </div>
               <div>
                  {/* <Image src={materials} fluid /> */}
               </div>
            </div>

            <div className="card-body">
               <h5 className="card-title" style={{ fontWeight: '700' }}>Ce que Nous faisons ?</h5>
               <p className="card-text">Chez CHAFORD, notre mission est de favoriser le développement de l'Afrique subsaharienne en encourageant l'entreprenariat, en facilitant l'accès à l'éducation et en accompagnant les jeunes réfugiés, déplacés et orphelins. Vous pouvez soutenir notre programme de tutorat pour les enfants en faisant un don ou en devenant bénévole dès maintenant. Ce programme offre un soutien éducatif crucial aux enfants vulnérables, les aidant à surmonter les obstacles académiques et favorisant leur réussite scolaire et leur développement personnel. Rejoignez-nous dans cette noble cause pour transformer la vie des enfants en Afrique subsaharienne grâce à l'éducation.</p>
            </div>

            <h3 className="my-4 text-center">Activites Humanitaires</h3>
            <div>
               <div >
                  {/* <Image src={joyKids} fluid /> */}
               </div>
               <div >
                  <h4>Education | Evangelisation</h4>
                  <p>CHAFORD dispose d'un ensemble d'activités conçues pour protéger les enfants dans les camps de réfugiés contre la violence basée sur le genre, l'exploitation sexuelle et les abus. Par conséquent, 10 comités de genre ont été installés pour protéger et signaler aux autorités locales chaque cas de violence.</p>
               </div>
            </div>
            <h3 className="my-3 text-center">Entreprenauriat</h3>
            <p>
               L'une des visions primordiales de CHAFORD est de parvenir à l'auto-financement de l'ensemble de ses activités, tout en offrant un accompagnement aux autres organisations de la société civile à but non lucratif. Dans cette perspective, CHAFORD propose une gamme diversifiée d'activités.
               À Goma, nous mettons en place des séances de préceptorat visant à répondre aux besoins des parents désireux d'améliorer les compétences de leurs enfants en lecture, écriture et calcul. Ces séances sont accompagnées par des enseignants qualifiés et des psychologues afin de remédier aux troubles d'apprentissage, garantissant ainsi la maîtrise et la compréhension des leçons par les élèves et les étudiants.
               Nos projets tels que FARDE (Farming for Development) ont pour objectif d'accroître la production avicole (œufs, poulets) afin de lutter contre la malnutrition. Par ailleurs, CHAFORD Kivu Transport facilite les déplacements dans la ville de Goma et ses environs, tout en assurant les déplacements du personnel et des volontaires lors des activités de CHAFORD. Les fonds collectés grâce à ces initiatives sont entièrement dédiés au financement des activités humanitaires de CHAFORD.
            </p>
         </div>
      </main>
   );
}

