import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
 import Modal from 'react-modal';
import "./styles/project.css";
//import edisonVideo from '../../assets/video/edisonVideo.mp4';
//import picture from '../../asssets/RetroFit-2.jpg';


const Project = (props) => {
    const { logo, title, description, linkText, link, demo  } = props;
    const [showMore, setShowMore] = useState(false);
    const shortDescription = `${description.substring(0, 100)}...`; // Adjust as needed
    //const isVideo = demo && (demo.endsWith('.mp4') || demo.endsWith('.webm'));
   
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const videoRef = useRef();

    const handleVideoClick = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <React.Fragment>
            <div className="project">
                <div className="project-container">
                    <Link to={link}>
                        <div className="project-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="project-title">{title}</div>
                    </Link>
                    <div>
                        <div className="project-description">{showMore ? description : shortDescription}</div>
                        <button onClick={() => setShowMore(!showMore)}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                <div>
                    <video
                     className="project-demo"
                        ref={videoRef}
                        onClick={openModal}
                        src={demo}
                        type="video/mp4"
                    />
                </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Video Modal"
                        style={{
                            content: {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                                border: 'none',
                                overflow: 'visible',
                            },
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                            },
                        }}
                    >
                    <button
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.5rem',
                        }}
                    > exit
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                        <video
                            ref={videoRef}
                            onClick={handleVideoClick}
                            src={demo}
                            type="video/mp4"
                            style={{ width: '90%', height: '90%' }}
                        />
                    </Modal>
                
                    <Link to={link}>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <div className="project-link-text">{linkText}</div>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;