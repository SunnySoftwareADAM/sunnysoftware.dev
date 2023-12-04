import React from 'react';
import type { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import TeamBanner from '../../components/TeamPage/TeamBanner/TeamBanner';
import TeamFullList from '../../components/TeamPage/TeamFullList/TeamFullList';

const ClientPortalPage: FunctionComponent = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Team-Sunny Software</title>
      <link rel="canonical" href="https://sunnysoftware.dev/team" />
      <meta
        name="description"
        content="The team members of Sunny Software LLC"
      />
    </Helmet>
    <TeamBanner />
    <TeamFullList />
  </div>
);

export default ClientPortalPage;
