import React from 'react';
import type { FunctionComponent } from 'react';
import Button, { ButtonSize } from '../../Button/Button';
import style from './TeamCallToAction.scss';

const TeamCallToAction: FunctionComponent = () => {
  const underlineSvg = (
    <svg width="129" height="12" viewBox="0 0 129 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M106.664 2.53795C98.0712 5.12862 88.8931 6.40976 79.9621 5.35303C79.9244 5.35303 79.8883 5.33807 79.8616 5.31144C79.835 5.2848 79.82 5.24867 79.82 5.211C79.82 5.17333 79.835 5.13721 79.8616 5.11057C79.8883 5.08394 79.9244 5.06897 79.9621 5.06897C88.8988 5.23941 97.7161 3.80772 106.602 2.25957C106.772 2.234 106.826 2.48682 106.664 2.53795Z" fill="#60CDFF" />
      <path d="M108.039 1.72808C108.765 1.4976 109.517 1.36295 110.278 1.32755C110.342 1.32099 110.406 1.33646 110.46 1.37141C110.515 1.40637 110.555 1.45872 110.576 1.51987C110.596 1.58102 110.595 1.64733 110.573 1.70788C110.551 1.76844 110.509 1.81964 110.454 1.85307C109.744 2.26698 108.911 2.41783 108.102 2.27917C108.037 2.27235 107.977 2.24382 107.932 2.19828C107.886 2.15274 107.857 2.09292 107.849 2.02869C107.842 1.96446 107.857 1.89967 107.891 1.84502C107.926 1.79037 107.978 1.74911 108.039 1.72808Z" fill="#60CDFF" />
      <path d="M18.9478 6.84704C30.3104 8.05431 41.8434 9.05991 53.2174 7.53448C60.2963 17.1927 115.678 6.15392 128.401 2.86445C128.479 2.84434 128.548 2.7963 128.593 2.72935C128.639 2.6624 128.658 2.58116 128.648 2.50085C128.646 2.47658 128.638 2.45313 128.626 2.43204C128.613 2.41096 128.597 2.39271 128.577 2.3785C128.557 2.36429 128.534 2.35442 128.51 2.34956C128.486 2.3447 128.462 2.34495 128.438 2.3503C114.235 5.58011 66.1679 14.2015 55.149 7.21349C58.0351 6.5573 62.6427 5.45796 63.2137 3.336C63.8329 1.04075 61.9695 -0.317075 60.1173 0.0635719C57.0409 0.404449 53.5839 2.10031 52.8396 5.3557C35.3128 7.18792 17.7291 4.9154 0.176712 3.51212C0.15506 3.51057 0.133316 3.51332 0.112732 3.5202C0.0921631 3.52708 0.0731354 3.53796 0.056778 3.55222C0.0404053 3.56647 0.0270233 3.58382 0.0173798 3.60326C0.00773621 3.6227 0.00202942 3.64386 0.000595093 3.66551C-0.00437927 3.7551 0.0234375 3.84344 0.0788574 3.91402C0.134262 3.98459 0.213486 4.03257 0.301697 4.049C6.47539 5.19473 12.6907 6.12741 18.9478 6.84704ZM54.9076 4.87563C56.0439 3.19397 58.484 2.03498 60.5889 2.03498C61.3502 2.03498 61.3615 2.38722 61.194 2.56902C59.7736 4.12854 56.8052 4.57168 54.7997 5.03755C54.8423 4.9921 54.8735 4.93245 54.9076 4.87563Z" fill="#60CDFF" />
    </svg>
  );
  return (
    <div className={style.ctaContainer}>
      <h2>Do you want to join our amazing team?</h2>
      <p>
        Book a call to see how Perspective Design
        can help elevate your company&#39;s designs
        to the next level.
      </p>
      {underlineSvg}
      <Button
        size={ButtonSize.Large}
        to="/careers"
      >
        See vacancies
      </Button>
    </div>
  );
};

export default TeamCallToAction;