import React from 'react';
import type { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import MethodologyBanner from '../../components/MethodologyPage/MethodologyBanner/MethodologyBanner';

const MethodologyPage: FunctionComponent = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Methodology-Sunny Software</title>
      <link rel="canonical" href="https://sunnysoftware.dev/methodology" />
      <meta
        name="description"
        content="The methodology of Sunny Software LLC"
      />
    </Helmet>
    <MethodologyBanner />
  </div>
);

export default MethodologyPage;
