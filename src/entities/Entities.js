import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import EntityElement from './EntityElement';
import '../bot-builder/main.css';
// let count = 0;
const Entities = () => {
   const [entities, setEntities] = useState([{
       id:0,
       title:"Good Bye",
       desc:"Bye"
   }]);

   const [clickedEntity, setClickedEntity] = useState(null);
 
//    const addFaq = ()=>{
//     ++count;
//     const newFaq = {
//         id: count,       
//         title:"New Intent",
//         desc:"Hi",
//     }
//     setFaqs(faqs => [...faqs,newFaq]);
    
//     setClickedFaq(newFaq);
//    }
   //updates only title
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
                <h2 className='tr-canvas-title'>Entities</h2>
            </header>

            <section className='apps-grid-container'>
                <span className='apps-grid-title pb1' style={{textAlign:"start"}}>ENTITIES AND SYNONYMS</span>
                <div className='apps-grid'>

                    { entities.length === 0 ?
                    (<div className='apps-grid-cell' style={{borderTop: "#eeeeee 1px solid"}} >
                        <a href="#">
                            <article className='apps-card-app'>
                                <div className='apps-card-left'>
                                    <div className='apps-card-meta' style={{textAlign:"start"}}>
                                        <h3 className='apps-card-app-title' style={{cursor:"pointer"}}>Entities list is empty!</h3>
                                        <p className='apps-card-app-desc'style={{color:"#6c757d"}}>Please add entites for the ChatBot</p>
                                    </div>
                                </div>                
                            </article>
                        </a>
                    </div>)
                    :
                    entities.map(entity => <EntityElement key={entity.id} entity={entity} setEntities={setEntities} setClickedEntity={setClickedEntity}/>)

                    }
                    
                </div>
            </section>
            <section className="apps-grid-container ">
                <span className="apps-grid-title pb1" style={{textAlign:"start", paddingBottom:"0.4rem"}}>Add Entities</span>
                <div className="apps-grid">
                    <div className="flex flex-column justify-center items-center mih30 miw-100" style={{minHeight:"12rem"}}>
                        <div className="flex flex-column items-center pa5 pt15 pb15" style={{padding:"6rem 2rem"}}>
                            <p className="ma0 pa0 tc midgrey lh-title mt2" style={{marginTop:"0.8rem",color:"#9baeb8", lineHeight:"1.4em"}}> Create your own custom Entities </p>
                            <Link to='/entities/add' style={{cursor: "pointer"}}>
                                <div className="flex items-center pa2 pt1" style={{padding:"0.8rem",color:"#3eb0ef"}}>
                                    <svg className="w3 h3 fill-blue-d1" viewBox="0 0 32 32" style={{height:"1.2rem",width:"1.2rem"}}>
                                        <path d="M30.688 14.688H17.375V1.313C17.375.625 16.75 0 16.062 0c-.75 0-1.375.625-1.375 1.313v13.375H1.312c-.688 0-1.313.563-1.313 1.313s.625 1.313 1.313 1.313h13.375v13.375A1.32 1.32 0 0016 32.002a1.32 1.32 0 001.313-1.313l.063-13.375h13.313c.75 0 1.313-.563 1.313-1.313s-.563-1.313-1.313-1.313z"></path>
                                    </svg>
                                    <span className="db ml1 blue nudge-bottom--1">Add an Entity</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
        </section>
        
        </>
        
    )
}

export default Entities;
