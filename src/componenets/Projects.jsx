import React from "react";
import projects from "./data/projects.json";

export const Projects = () => {
  return (
    <div className="container my-5" id="projects">
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((data) => (
          <div
            key={data.id}
            className="my-4 col-12 col-sm-6 col-md-4 col-lg-3 mx-3"
          >
            <div
              className="card bg-dark text-light"
              style={{
                width: "100%",
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px 10px rgba(101,75,10)",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-content-center p-3">
                <img
                  src={data.imageSrc} 
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    border: "2px solid yellow",
                    borderRadius: "10px",
                    padding: "2px"
                  }}
                />
              </div>

              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary mx-2 mb-2">
                  Demo
                </a>
                <a href={data.source} className="btn btn-warning mx-2 mb-2">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
