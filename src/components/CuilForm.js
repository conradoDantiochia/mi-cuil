import { Toaster} from 'react-hot-toast';
const CuilForm = ({handleSubmit, handleChange}) => {
    return( 
        <div className="card card-body bg-light">
            <form 
                onSubmit={handleSubmit}
            >
                <div className="form-group form-control form-control-sm px-3">
                    <h3 className="text-info fs-5">Ingrese su DNI y su género</h3>
                    <input 
                        type="number" 
                        name="dni" 
                        placeholder="Ingrese su DNI"
                        className="form-control" 
                        autoFocus={true}
                        min="10000000" max="99999999"
                        onChange={handleChange}
                    />
                    <select 
                        className="my-3 form-control" 
                        label="Selecccione un genero" 
                        name="genero" 
                        defaultValue={""}
                        onChange={handleChange}
                    >
                        <option value="" disabled>seleccione un sexo</option>
                        <option value="femenino">Femenino</option>
                        <option value="masculino">Masculino</option>
                    </select>
                </div>
                <button
                    className="btn m-3 btn-success btn-block fs-6 text-capitalize"
                >   
                    {/* <FontAwesomeIcon icon={faSearchLocation} /> */}
                    &nbsp;
                    Consultar CUIL
                </button>
                <br/>
                <Toaster />
            </form>

        </div>
    )
};

export default CuilForm;
