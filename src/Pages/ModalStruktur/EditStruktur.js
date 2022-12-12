import React from "react";



const EditStruktur = () => {
  
 
  const {ida} = this.props.baslikida;
  

    
          return (
            <> 
             <div  className="modal fade text-start"  id={`"${ida}"`} aria-labelledby="1 "  aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="1">Struktur Form</h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form action="#" name="form863">
                      <div className="modal-body">
                        <label>Struktur: </label>
                        <div className="mb-1">
                          <input type="text" placeholder="Email Address" className="form-control" value={ida} />
                          <input type="text" placeholder="Email Address" className="form-control"  />
                        </div>

                       
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Redaktə et</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
   
    </>
  )
} 




  
export default EditStruktur;