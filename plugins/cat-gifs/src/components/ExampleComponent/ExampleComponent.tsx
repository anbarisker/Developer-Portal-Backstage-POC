import React, { useState } from 'react';
import HdrStrongOutlined from '@material-ui/icons/HdrStrongOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';
import Favourite from '@material-ui/icons/Favorite';
import { Typography, Grid, Button } from '@material-ui/core';

import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
} from '@backstage/core-components';

export const ExampleComponent = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Grid style={{ marginBottom: '3rem' }}>
      <Grid item xs={12} spacing={3}>
        <InfoCard>
          <Typography variant="h6">
            Number of likes: {isLiked ? '1' : '0'}
          </Typography>
          <Content>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsLiked(!isLiked)}
            >
              {isLiked ? <Favourite /> : <FavoriteBorderOutlined />}
            </Button>
          </Content>
        </InfoCard>
      </Grid>
    </Grid>
  );
};
