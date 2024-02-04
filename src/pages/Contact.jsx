import React from 'react';


const Contact = () => {
   return (
      <div className='contact-wrapper'>

         <div className="container">
            <h1>Nous Contactez</h1>
            <div class="mb-3">
               <label htmlFor="userName" className="form-label">Votre Nom</label>
               <input type="text" className="form-control" placeholder="Nom" />
            </div>
            <div className="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Votre Email address</label>
               <input type="email" class="form-control" id="userEmail" placeholder="name@gmail.com" />
            </div>
            <div class="mb-3">
               <label for="exampleFormControlTextarea1" class="form-label">Ecrivez Nous Votre Message</label>
               <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary">Envoyez</button>
            </div>
      </div>
   );
};

export default Contact;