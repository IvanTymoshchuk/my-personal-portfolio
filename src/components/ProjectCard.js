import { Col } from 'react-bootstrap';

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  gitHub,
  proj,
  gitHubHref,
  projHubHref,
}) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="proj" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-icon">
            <a href={gitHubHref} target="blanch">
              <img src={gitHub} alt="gitHub" />
            </a>
          </div>
          <div className="social-icon">
            <a href={projHubHref} target="blanch">
              <img src={proj} alt="proj" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
