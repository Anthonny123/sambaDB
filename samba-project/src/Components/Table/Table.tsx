interface tableComponents{
    data:any,
    deleteData:any
    handleOpen:any
    setIdModify:any
    currentTable:any

}

export default function Table({data, deleteData, handleOpen, setIdModify, currentTable}:tableComponents){
    
    const tdList ={
        "Integrantes de Escuelas":['Codigo', 'Primer Nombre', 'Segundo Nombre', 'Primer Apellido', 'Segundo Apellido', 'Documento de Identidad', 'Apodo', 'Fecha de Nacimiento', 'Nacionalidad'],
        "Autores":['Codigo Samba', 'Codigo de Integrante de la Escuela', 'Codigo de la Escuela', 'Fecha de Inicio', ],
        "Colores de Las escuelas":['Codigo de la Escuela', 'Codigo del Color'],
        "Colores":['Codigo', 'Nombre del Color'],
        "Escuelas de Samba":['Codigo', 'Historia', 'Sede', 'Fecha de Fundacion', 'Nombre de la Escuela', 'Codigo del Lugar'],
        "Eventos":['Codigo', 'Nombre', 'Descripcion', 'Tipo', 'Fecha de Inicio', 'Fecha final', 'Asistencia', 'Costo unitario en Reales', 'Codigo de la Escuela de Samba'],
        "Ganadores":['Año Ganador', 'Codigo de Premio Especial', 'Fecha de Inicio', 'Codigo de la escuela de Samba', 'Codigo del Integrante de la Escuela'],
        "Habilidades":['Codigo', 'Nombre de la Habilidad', 'Descripcion de la Habilidad'],
        "Historial de Integrantes":['Fecha de Inicio', 'Fecha Final', 'Autoridad', 'Codigo de la Escuela de Samba', 'Codigo del Integrante de la Escuela'],
        'Historial de Patrocinadores':['Codigo', 'Fecha de inicio', 'Fecha final', 'Codigo de la Escuela de Samba', 'Codigo del Patrocinador Juridico', 'Codigo del Patrocinador Natural'],
        "Historial de Titulos de las Escuelas":['Año', 'Grupo', 'Monto ganado en Reales', 'Codigo de la escuela de Samba'],
        "Habilidades de Integrantes":['Codigo del Integrante de la Escuela', 'Codigo de la Habilidad'],
        "Lugares":['Codigo', 'Nombre', 'Tipo', 'Region', 'Codigo del Estado'],
        'Organizacion del Carnaval':['Año', 'Codigo de la Escuela de Samba', 'Codigo de los Integrantes de la Escuela', 'Fecha de Inicio', 'Codigo del Rol'],
        'Parentescos':['Nombre del Parentesco', 'Codigo del Integrante de la Escuela 1, Codigo del Integrante de la Escuela 2'],
        'Donacion de Patrocinadores':['Codigo', 'Monto en Reales', 'Fecha de la Donacion', 'Codigo de la Escuela de Samba', 'Codigo del Historial del Patrocinador'],
        'Patrocinadores Juridicos':['Codigo', 'Nombre de la Empresa', 'Contacto Email', 'Mision'],
        'Patrocinadores Naturales':['Codigo', 'Documento de Identidad', 'Primer Nombre', 'Segundo Nombre', 'Primer Apellido', 'Segundo Apellido', 'Fecha de Nacimiento', 'Contacto Email'],
        'Premios Especiales':['Codigo', 'Nombre', 'Tipo', 'Descripcion', 'Codigo del Lugar'],
        'Roles':['Codigo', 'Nombre del Rol', 'Descripcion'],
        'Samba':['Codigo', 'Letra', 'Nombre de la Cancion', 'Año del Carnaval', 'tipo'],
        'Telefonos':['Codigo Internacional', 'Codigo de Area', 'Numero de Telefono', 'Codigo de la escuela de Samba', 'Codigo del Patrocinador Juridico', 'Codigo del Patrocinador Natural']

    }
    return(
        <>
             {currentTable === 'Integrantes de Escuelas' ?
                <table>
                {tdList["Integrantes de Escuelas"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.primer_nombre}</td>
                    <td>{e.segundo_nombre}</td>
                    <td>{e.primer_apellido}</td>
                    <td>{e.segundo_apellido}</td>
                    <td>{e.documento_identidad}</td>
                    <td>{e.apodo}</td>
                    <td>{e.fecha_nacimiento}</td>
                    <td>{e.nacionalidad}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Habilidades' ?
              <table>
                {tdList['Habilidades'].map((e:any)=><td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre_habilidad}</td>
                    <td>{e.descripcion}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Colores' ?
              <table>
                {tdList["Colores"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre_color}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Samba' ?
              <table>
                {tdList["Samba"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.letra}</td>
                    <td>{e.nombre_cancion}</td>
                    <td>{e.year_carnaval}</td>
                    <td>{e.tipo}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Roles' ?
              <table>
                {tdList["Roles"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre_rol}</td>
                    <td>{e.descripcion}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Patrocinadores Naturales' ?
              <table>
                {tdList["Patrocinadores Naturales"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.documento_identidad}</td>
                    <td>{e.primer_nombre}</td>
                    <td>{e.segundo_nombre}</td>
                    <td>{e.primer_apellido}</td>
                    <td>{e.segundo_apellido}</td>
                    <td>{e.fecha_nacimiento}</td>
                    <td>{e.contacto_email}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Patrocinadores Juridicos' ?
              <table>
                {tdList["Patrocinadores Juridicos"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre_empresa}</td>
                    <td>{e.contacto_email}</td>
                    <td>{e.mision}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Premios Especiales' ?
              <table>
                {tdList["Premios Especiales"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre}</td>
                    <td>{e.tipo}</td>
                    <td>{e.descripcion}</td>
                    <td>{e.cod_lugar}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === 'Escuelas de Samba' ?
              <table>
                {tdList["Escuelas de Samba"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.historia}</td>
                    <td>{e.sede}</td>
                    <td>{e.fecha_fundacion}</td>
                    <td>{e.nombre_escuela}</td>
                    <td>{e.cod_lugar}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Telefonos" ?
              <table>
                {tdList["Telefonos"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo_internacional}</td>
                    <td>{e.codigo_area}</td>
                    <td>{e.numero_telefono}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_patrocinador_j}</td>
                    <td>{e.cod_patrocinador_n}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Historial de Integrantes" ?
              <table>
                {tdList["Historial de Integrantes"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.fecha_inicio}</td>
                    <td>{e.fecha_fin}</td>
                    <td>{e.autoridad}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_integrante_escuela}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Eventos" ?
              <table>
                {tdList["Eventos"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre}</td>
                    <td>{e.descripcion}</td>
                    <td>{e.fecha_inicio}</td>
                    <td>{e.fecha_fin}</td>
                    <td>{e.asistencia}</td>
                    <td>{e.costo_unitario_reales}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Historial de Patrocinadores" ?
              <table>
                {tdList["Historial de Patrocinadores"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.fecha_inicio}</td>
                    <td>{e.fecha_fin}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_patrocinador_j}</td>
                    <td>{e.cod_patrocinador_n}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Donacion de Patrocinadores" ?
              <table>
                {tdList["Donacion de Patrocinadores"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.monto_reales}</td>
                    <td>{e.fecha_donacion}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_hist_patrocinador}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Historial de Titulos de las Escuelas" ?
              <table>
                {tdList["Historial de Titulos de las Escuelas"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.ano}</td>
                    <td>{e.grupo}</td>
                    <td>{e.monto_ganado_reales}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Organizacion del Carnaval" ?
              <table>
                {tdList["Organizacion del Carnaval"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.ano}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_integrante_escuela}</td>
                    <td>{e.fecha_inicio}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Ganadores" ?
              <table>
                {tdList["Ganadores"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.ano}</td>
                    <td>{e.cod_premio_especial}</td>
                    <td>{e.cod_auxiliar}</td>
                    <td>{e.fecha_inicio}</td>
                    <td>{e.cod_integrante_escuela}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_Escuela_samba_int}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Colores de Las escuelas" ?
              <table>
                {tdList["Colores de Las escuelas"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.cod_color}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Autores" ?
              <table>
                {tdList["Autores"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.cod_samba}</td>
                    <td>{e.cod_integrante_escuela}</td>
                    <td>{e.cod_escuela_samba}</td>
                    <td>{e.fecha_inicio}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Habilidades Integrantes" ?
              <table>
                {tdList["Habilidades de Integrantes"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.cod_integrante_escuela}</td>
                    <td>{e.cod_habilidad}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Parentescos" ?
              <table>
                {tdList["Parentescos"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.nombre_parentesco}</td>
                    <td>{e.cod_integrante_escuela1}</td>
                    <td>{e.cod_integrante_escuela2}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : currentTable === "Lugares" ?
              <table>
                {tdList["Lugares"].map((e:any) => <td>{e}</td>)}
                {data.map((e: any) => (
                  <tr>
                    <td>{e.codigo}</td>
                    <td>{e.nombre}</td>
                    <td>{e.tipo}</td>
                    <td>{e.region}</td>
                    <td>
                      <button
                        id={e.codigo}
                        onClick={(e) => deleteData(parseInt(e.currentTarget.id))}
                      >
                        Eliminar
                      </button>
                    </td>
                    <td>
                      <button id={e.codigo} onClick={(e)=>{
                        setIdModify(parseInt(e.currentTarget.id));
                        handleOpen()
                        }}>
                        Modificar
                      </button>
                    </td>
                  </tr>
                ))}
              </table>
              : null
            }
        </>
    )
}