import React from 'react'
import './Section.css';
import { useState } from 'react';

export default function Product(props) {
    const [disabled, setDisable] = useState(false);
    const increaseCartCount = ()=>{
        props.setCount(props.count+1);
        setDisable(true);
    }
    
    return (
        <div className="col mb-5">
                    <div className="card h-100">
                        
                        <div className={`badge bg-dark text-white position-absolute ${props.details.isSale === false ? "d-none" : ""}`} style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                        
                        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                        
                        <div className="card-body p-4">
                            <div className="text-center">
                                
                                <h5 className="fw-bolder">{props.details.productName}</h5>
                                
                                <div className={`d-flex justify-content-center small text-warning mb-2 ${props.details.isRating === false ? "d-none" : ""}`}>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                </div>
                                
                                <span className={`text-muted text-decoration-line-through ${props.details.discountedPrice === "" ? "d-none" : ""}`}>{props.details.discountedPrice}</span>
                                {props.details.price}
                            </div>
                        </div>
                        
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent cart" disabled={disabled}>
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={props.details.buttonOption === "Add to cart" ? increaseCartCount : ""}>{props.details.buttonOption}</a></div>
                        </div>
                    </div>
                </div>
    )
}
