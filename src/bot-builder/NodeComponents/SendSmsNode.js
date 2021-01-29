import React, { memo } from 'react';
import { Handle, removeElements } from 'react-flow-renderer';
// import './style1.css'
import './nodeStyles.css'
export default memo(({id,data}) => {
  
  const deleteNode = () =>{
    data.setElements((els) => removeElements([els.find( e => e.id === id)], els));
  }
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ height:"1rem", width:"1rem" }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
     
    {/* <div className="node">
      <div className="node-header">
      <i className="far fa-envelope-open"></i>
        <div className="node-name" >
          
         
        </div>
        <div className="cross">
          <button onClick={deleteNode}>
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
      </div>
      <div className="message"><strong>text</strong>.</div>
    </div> */}
    {/* style={{margin:0,background:"#f2f5f7"}} */}
    <div className="Node">
    <div
        className="td-cta-box td-cta-docs communication"
        target="_blank"
        rel="noopener"
        style={{margin:0,background:"#f2f5f7"}}
      >
        <div className="td-cta-icon">
          <svg
            id="Capa_1"
            enableBackground="new 0 0 512 512"
            height="20"
            viewBox="0 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
          >
            <g>
              <path d="m418.265 62.009c-43.79 0-80.663 30.184-90.906 70.839h-289.903c-9.797 0-19.054 3.755-26.086 10.578-.007.007-.015.014-.022.021-.023.023-.047.045-.071.068-7.272 7.108-11.277 16.622-11.277 26.789v242.231c0 10.317 4.318 20.275 11.844 27.323.015.014.03.029.045.043 6.962 6.507 16.041 10.091 25.567 10.091h353.353c9.496 0 18.549-3.561 25.499-10.026.05-.046.099-.092.148-.139 7.505-7.05 11.808-16.991 11.808-27.291v-163.586c47.003-5.007 83.736-44.897 83.736-93.206 0-51.685-42.049-93.735-93.735-93.735zm-380.809 90.839h287.119c-.029.962-.044 1.927-.044 2.896 0 17.909 5.049 34.661 13.797 48.908l-117.659 111.222h-13.071l-172.322-162.892c.718-.089 1.446-.134 2.18-.134zm-17.456 17.456c0-1.309.143-2.595.421-3.841l140.09 132.424-139.735 118.816c-.507-1.648-.776-3.383-.776-5.168zm370.809 259.687h-353.353c-.082 0-.162-.01-.243-.011l137.919-117.273 21.618 20.435c1.857 1.755 4.315 2.732 6.87 2.732h21.027c2.555 0 5.013-.978 6.87-2.732l21.617-20.435 137.93 117.282c-.085.001-.17.002-.255.002zm17.456-17.456c0 1.786-.263 3.523-.771 5.172l-139.74-118.821 82.859-78.325c14.902 15.548 35.094 25.986 57.652 28.389zm10-183.055c-40.658 0-73.735-33.078-73.735-73.736s33.077-73.735 73.735-73.735 73.735 33.077 73.735 73.735-33.077 73.736-73.735 73.736z" />
              <path d="m421.629 123.719h-10.69c-5.523 0-10 4.478-10 10s4.477 10 10 10h.69v39.991c0 5.522 4.477 10 10 10s10-4.478 10-10v-49.991c0-5.523-4.477-10-10-10z" />
            </g>
          </svg>
        </div>
        <div className="td-cta-content-wrapper">
          <div className="td-cta-content">
            <h3 className="fw6 f6">Send SMS</h3>
          </div>
        </div>
      </div>
      <div className="cross">
          <button onClick={deleteNode}>
            <i className="fas fa-times-circle"></i>
          </button>
      </div>
      </div>
      <Handle
      onClick={() => {
        console.log("clicked");
        document.getElementById("grey-screen").style = "width:100%";
        document.getElementById("sidebar").classList.add("side-bar-open");
        data.setPrevNode(id);
      }}
        type="source"
        position="bottom"
        style={{ cursor:"pointer", height:"1rem", width:"1rem"}}
        // style={{ top: 10, background: '#555' }}
      />
     
    </>
  );
});