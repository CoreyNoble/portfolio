import React, { useState } from 'react';
import './Hero.scss';

import profile from '../../assets/img/profile/Corey-Noble-Index-Portrait.png';
import {
  CYPRESS,
  DOCKER,
  GIT,
  GOOGLE_LIGHTHOUSE,
  HYPER_TEXT_MARKUP_LANGUAGE,
  NODE,
  REACT,
  SYNTATCICALLY_AWESOME_STYLE_SHEETS,
  TESTING_LIBRARY,
  TYPESCRIPT,
} from '../../utils/images';

export const Hero: React.FC = () => {
  const [playingAnimation, setPlayingAnimation] = useState(true);

  const pauseOrbit = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    setPlayingAnimation(false);
  };

  const playOrbit = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    setPlayingAnimation(true);
  };

  return (
    <div className="hero">


      <div className={`orbit ${playingAnimation ? "" : "pause-anim"}`}>
        <div className="center-image">
          <img src={profile} alt="" />
        </div>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={TYPESCRIPT} alt="TypeScript" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={SYNTATCICALLY_AWESOME_STYLE_SHEETS} alt="Syntactically Awesome Style Sheets" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img className="pt-xs" src={HYPER_TEXT_MARKUP_LANGUAGE} alt="HyperText Markup Language" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={GIT} alt="Git" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={TESTING_LIBRARY} alt="Testing Library" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={CYPRESS} alt="Cypress" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={GOOGLE_LIGHTHOUSE} alt="Google Lighthouse" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={DOCKER} alt="Docker" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img src={NODE} alt="Node" />
          </li>
        </ul>

        <ul
          onMouseEnter={pauseOrbit}
          onMouseLeave={playOrbit}
        >
          <li>
            <img className="spin" src={REACT} alt="React" />
          </li>
        </ul>
      </div>

      <div className="hero__details">
        <div className="hero__details-title">
          <h1>Corey Noble</h1>
          <h2>Web Development Engineer II (L5), Amazon</h2>
        </div>
        <div className="hero__details-ctas">

        </div>
        <div className="hero_details-badge">

        </div>
      </div>
    </div>
  );
};