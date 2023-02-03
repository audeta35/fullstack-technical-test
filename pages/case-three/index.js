import React from 'react';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Table,
  Typography,
} from '@mui/material';
import Iframe from 'react-iframe';

export default function CaseThree() {
    const router = useRouter();

  return (
    <Container style={{ marginTop: 20 }}>
      <Button
        onClick={() => router.back()}
        variant='contained'
        style={{ marginBottom: 10 }}
      >
        Back
      </Button>
      <div>
        <Iframe
          url='https://gadaiaman.web.app/'
          width={'100%'}
          height={'640'}
          id=''
          className=''
          display='block'
          position='relative'
        />
      </div>
    </Container>
  );
}
