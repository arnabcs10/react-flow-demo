import React from 'react';
import {Link} from 'react-router-dom';
import '../bot-builder/main.css';
// let count = 0;
const AddEntity = () => {
   

//    const [clickedFaq, setClickedFaq] = useState(null);
 
//    const addFaq = ()=>{
//     ++count;
//     const newFaq = {
//         id: count,       
//         title:"New Intent",
//         desc:"Hi",
//     }
//     setFaqs(faqs => [...faqs,newFaq]);
    
//    }
//    //updates only title
//    const updateFaq = (id,newTitle)=>{
//     setFaqs(faqs => faqs.map(faq => {
//         if(faq.id === id){
//             return {...faq,title:newTitle};
//         }
//         return faq;
//     }));
//    }
    return (
        <>
        <section className='tr-canvas' style={{padding:"0 7%", background:"#f2f4f7", minHeight:"100vh"}}>
            <header className='tr-canvas-header' style={{position:"relative",zIndex:"70"}}>
                <h2 className='tr-canvas-title'>
                    <Link to="/entities">Entities</Link>
                    <span>
                    <svg viewBox="0 0 48 48"><path d="M37.802 23.247l-26.286-23a1 1 0 00-1.317 1.506L35.624 24 10.199 46.247a1 1 0 101.317 1.506l26.286-23a1.001 1.001 0 000-1.506z" fill="#010101"></path></svg>
                    </span>
                    Add
                </h2>
                <button className='tr-btn tr-btn-blue'>
                    <span>Save</span>
                </button>
            </header>

            <section className='apps-grid-container'>
                {/* <span className='apps-grid-title pb1' style={{textAlign:"start"}}>FAQs</span>
                <div className='apps-grid'>
                    
                    
                    <div className="apps-grid-cell " style={{borderTop: "#eeeeee 1px solid", height:"65px"}} >
                        <a className="flex items-center" href="#">
                            <div className='pa3 f7' style={{padding:"1.2rem", fontSize:"1.4rem"}}>
                            <svg className="w3 h3 fill-blue-d1" viewBox="0 0 32 32" style={{height:"1.2rem",width:"1.2rem"}}>
                                    <path d="M30.688 14.688H17.375V1.313C17.375.625 16.75 0 16.062 0c-.75 0-1.375.625-1.375 1.313v13.375H1.312c-.688 0-1.313.563-1.313 1.313s.625 1.313 1.313 1.313h13.375v13.375A1.32 1.32 0 0016 32.002a1.32 1.32 0 001.313-1.313l.063-13.375h13.313c.75 0 1.313-.563 1.313-1.313s-.563-1.313-1.313-1.313z"></path>
                                </svg>
                                <span className="ml1 blue" style={{color:"#3eb0ef", marginLeft:"0.4rem"}}>Add FAQ</span>
                            </div>

                        </a>
                    </div>
                </div> */}
                <section className="app-grid">
                    <div className="app-cell" style={{width: "100%", textAlign:"start"}}>
                        <h3>
                        <input  
                            // className="entityName" 
                            placeholder="Enter entity name"
                            style={{
                                width:" 100%",
                                background: "0 0",
                                border: "none",
                                borderBottom: "2px solid #d6e3eb",
                                color:"rgb(141,148,151)",
                                outline: 0
                            }}
                            />
                        </h3>
                    </div>
                </section>

                <div className='apps-grid' style={{marginTop:"0.8rem"}}>
                <div className="apps-grid-cell " style={{borderTop: "#eeeeee 1px solid", height:"65px"}} >
                        <a className="flex items-center" href="#">
                            <div className='pa3 f7' style={{padding:"1.2rem", fontSize:"1.4rem"}}>
                            <svg className="w3 h3 fill-blue-d1" viewBox="0 0 32 32" style={{height:"1.2rem",width:"1.2rem"}}>
                                    <path d="M30.688 14.688H17.375V1.313C17.375.625 16.75 0 16.062 0c-.75 0-1.375.625-1.375 1.313v13.375H1.312c-.688 0-1.313.563-1.313 1.313s.625 1.313 1.313 1.313h13.375v13.375A1.32 1.32 0 0016 32.002a1.32 1.32 0 001.313-1.313l.063-13.375h13.313c.75 0 1.313-.563 1.313-1.313s-.563-1.313-1.313-1.313z"></path>
                                </svg>
                                <span className="ml1 blue" style={{color:"#3eb0ef", marginLeft:"0.4rem"}}>Add an Entity</span>
                            </div>

                        </a>
                    </div>   
                </div>

            </section>
            
        </section>
        
        </>
        
    )
}

export default AddEntity;
