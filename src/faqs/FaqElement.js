import React from 'react';

const FaqElement = ({faq,setFaqs,setClickedFaq}) => {

    const openModal = () => {
        console.log("clicked");
        document.getElementById("grey-screen-faq").style = "width:100%";
        document.getElementById("sidebar-faq").classList.add("side-bar-open-faq");
        setClickedFaq(faq);
      };

    return (
        <div className='apps-grid-cell' style={{borderTop: "#eeeeee 1px solid"}} onClick={(e)=> {if(e.target.id!=="delete-faq") openModal()}}>
            <a href="#">
                <article className='apps-card-app'>
                    <div className='apps-card-left'>
                        <div className='apps-card-meta' style={{textAlign:"start"}}>
                            <h3 className='apps-card-app-title' style={{cursor:"pointer"}}>{faq.title}</h3>
                            <p className='apps-card-app-desc'style={{color:"#6c757d"}}>{faq.desc}</p>
                        </div>
                    </div>
                    <div className='apps-card-right'>
                        <div className='apps-configured'>
                            <button 
                                className='tr-blognav-delete mr-3' 
                                type="button" 
                                
                                >
                                <svg viewBox="0 0 32 32"
                                id="delete-faq"
                                style={{marginRight:"15px"}}
                                onClick={(e) =>
                                    setFaqs((faqs) => faqs.filter((f) => f.id !== faq.id))
                                }
                                
                                >
                                    <path d="M30.688 4H22V.687a.694.694 0 00-.688-.688H10.687a.694.694 0 00-.688.688V4H1.311c-.375 0-.625.313-.625.688s.25.625.625.625h3.375v26c0 .375.25.688.625.688h21.375c.375 0 .625-.313.625-.688v-26h3.375c.375 0 .625-.25.625-.625S31.061 4 30.686 4zM11.313 1.313h9.375v2.688h-9.375zM26 30.688H6V5.313h20zM10.688 9.313a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.625-.313.625-.688V10.001c0-.375-.25-.688-.625-.688zm5.312 0a.694.694 0 00-.688.688v15.313c0 .375.313.688.688.688s.688-.313.688-.688V10.001A.694.694 0 0016 9.313zm4.688.687v15.313c0 .375.25.688.625.688s.688-.313.688-.688V10c0-.375-.313-.688-.688-.688s-.625.313-.625.688z"></path>
                                </svg>
                                <span className="sr-only">Delete</span>
                            </button>
                            <span className="blue">Edit</span>
                            <svg className="fill-blue" viewBox="0 0 48 48"><path  d="M37.802 23.247l-26.286-23a1 1 0 00-1.317 1.506L35.624 24 10.199 46.247a1 1 0 101.317 1.506l26.286-23a1.001 1.001 0 000-1.506z" fill="#010101"></path></svg>

                        </div>
                    </div>

                </article>
            </a>
        </div>
    )
}

export default FaqElement;
