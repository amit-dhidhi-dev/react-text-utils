import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor: 'white',

    //     }
    // )

 let myStyle = {

    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? 'rgb(36, 74, 104)' : 'white',

 }


    return (
        <>
            <div className="container" style={ {color:props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>About us</h2>
                <div className="accordion" id="accordionExample"  >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                            <div className="accordion-body"  style={ myStyle} >
                                Unlock the power of your words with TextUtils! Analyze your text effortlessly to count characters, words, and even detect readability. Customize your content by transforming it to uppercase, lowercase, or capitalized formats. Spot repeated phrases and enhance precision. TextUtils: Your companion for smarter writing!</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={ myStyle} >
                            Embrace simplicity with TextUtils—your go-to tool that's completely free to use! Whether you're editing, analyzing, or refining text, enjoy all features without any restrictions. No subscriptions, no hidden charges—just efficient, hassle-free text analysis. Optimize your writing experience with zero costs involved. TextUtils: Unlimited potential at no expense!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               <strong>Browser compatible</strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={ myStyle} >
                            Access TextUtils seamlessly across all modern browsers! Our tool ensures optimal performance on Chrome, Firefox, Edge, and Safari, so you can edit and analyze text without any compatibility concerns. Whether you're on desktop or mobile, enjoy a consistent and user-friendly experience. TextUtils: Designed to work, wherever you are.
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
