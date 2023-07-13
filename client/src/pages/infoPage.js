import React from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';


function infoPage() {
    // const navigate = useNavigate();


    return (
        <>
            <section className="backdrop-blur-lg bg-white/60 transition rounded-lg ">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h2 className="text-xl raleway-font-bold text-custom-dark text-left my-2">About the App</h2>
                            <p className="text-left my-2">OCDetour is an app to help delay compulsions for people with OCD. Leveraging research published in the journal of Behavioral Analysis, OCDetour utilizes the concept of delay discounting. By delaying a compulsion, the perceived reward value of completing the compulsion decreases. With OCDetour, the user can select from a list of Detours -- activities that encourage the user to do something else for a set amount of time -- and delay compulsions.</p>


                            <h2 className="text-xl raleway-font-bold text-custom-dark text-left my-2">OCD Resources and Information</h2>
                            <ul className="text-left my-2">
                                <li className="text-info">
                                    <a href="https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd">NIH - what is OCD?</a>
                                </li>
                                <li className="text-info">
                                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6758933/">Behavioral Analysis Article on Delay Discounting</a>
                                </li>
                                <li className="text-info">
                                    <a href="https://www.paywhatyoucanpeersupport.com/">Pay What You Can Peer Support</a>
                                </li>
                                <li className="text-info">
                                    <a href="https://iocdf.org/ocd-finding-help/other-resources/">Resources from the International OCD Foundation</a>
                                </li>
                            </ul>
                            <h2 className="text-xl raleway-font-bold text-custom-dark text-left my-2">Disclaimer</h2>
                            <p className="text-left my-2">OCDetour is an app designed to provide support and information for individuals dealing with obsessive-compulsive disorder (OCD). However, OCDetour is not intended to replace professional medical advice, diagnosis, or treatment. The content provided in this app is for informational purposes only and should not be considered a substitute for professional medical guidance.</p>
                            <div className="p-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-base-content mb-10">
                            </div>

                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default infoPage;