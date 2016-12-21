import {
  Badge,
  Button,
  Footer,
  FooterTab,
  Icon
} from 'native-base';
import React from 'react';

export default () => (
  <Footer>
    <FooterTab>
      <Button>
        <Badge>2</Badge>
        Apps
        <Icon name='ios-apps-outline' />
      </Button>
      <Button>
        Camera
        <Icon name='ios-camera-outline' />
      </Button>
      <Button active>
        Navigate
        <Icon name='ios-compass' />
      </Button>
      <Button>
        Contact
        <Icon name='ios-contact-outline' />
      </Button>
    </FooterTab>
  </Footer>
);
