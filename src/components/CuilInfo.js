import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toaster, toast } from 'react-hot-toast';

const CuilInfo = ({ cuil, state }) => {

    return (
        <div className="card card-body bg-primary bg-gradient mt-2 py-2 animated text-light animate__animated animate__fadeInUp animate__delay-2s" >
            {state ?
                <div className='mx-auto mb-2 text-center'>
                    <h3>{cuil}</h3>
                    <hr />
                    <CopyToClipboard
                        text={cuil}
                    >
                        <button
                            className='btn btn-sm btn-dark btn-block'
                            onClick={
                                () => toast(
                                    "CUIL copiado",
                                    {
                                        style: {
                                            borderRadius: '10px',
                                            background: 'green',
                                            color: '#fff',
                                        },
                                        position: "top-center",
                                        icon: '✅'
                                    }
                                )
                            }
                        >
                            Copiar al portapapeles</button>
                    </CopyToClipboard>
                    <Toaster />
                </div> 
                :
                <div className='mx-auto text-center'>
                    <h3>Ingrese su CUIL y género</h3>
                </div>
            }
        </div>
    );
};

export default CuilInfo;
