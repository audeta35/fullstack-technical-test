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

export default function CaseOne() {
    const router = useRouter();
  const fruits = [
    {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10,
    },
    {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20,
    },
    {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50,
    },
    {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100,
    },
    {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10,
    },
    {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20,
    },
    {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150,
    },
  ];

  function amount(item) {
    return item.stock;
  }

  function sum(prev, next) {
    return prev + next;
  }

  return (
    <Container style={{ marginTop: 20 }}>
      <Button
        onClick={() => router.back()}
        variant='contained'
        style={{marginBottom: 10}}
      >
        Back    
      </Button>
      <div>
        <Accordion>
          <AccordionSummary>
            <Typography variant='h6'>
              1. Buah apa saja yang dimiliki Andi?
              (fruitName)
            </Typography>
            <Divider style={{ margin: 5 }} />
          </AccordionSummary>

          <AccordionDetails>
            {fruits?.map((item) => (
              <Chip
                label={item?.fruitName}
                variant='outlined'
                style={{
                  margin: 5,
                }}
              />
            ))}
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography variant='h6'>
              2. Andi memisahkan buahnya menjadi
              beberapa wadah berdasarkan tipe buah
              (fruitType). Berapa jumlah wadah
              yang dibutuhkan? Dan ada buah apa
              saja di masing-masing wadah?
            </Typography>
            <Divider style={{ margin: 5 }} />
          </AccordionSummary>

          <AccordionDetails>
            <Grid
              container
              spacing={1}
            >
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography>
                      Buah Import
                    </Typography>
                    {fruits
                      .filter(
                        (item) =>
                          item?.fruitType ===
                          'IMPORT'
                      )
                      .map((item) => (
                        <Chip
                          label={item?.fruitName}
                          variant='outlined'
                          style={{
                            margin: 5,
                          }}
                        />
                      ))}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card>
                  <CardContent>
                    <Typography>
                      Buah Lokal
                    </Typography>
                    {fruits
                      .filter(
                        (item) =>
                          item?.fruitType ===
                          'LOCAL'
                      )
                      .map((item) => (
                        <Chip
                          label={item?.fruitName}
                          variant='outlined'
                          style={{
                            margin: 5,
                          }}
                        />
                      ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography variant='h6'>
              3. Berapa total stock buah yang ada
              di masing-masing wadah?
            </Typography>
            <Divider style={{ margin: 5 }} />
          </AccordionSummary>

          <AccordionDetails>
            <Grid
              container
              spacing={1}
            >
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography>
                      Buah Import
                    </Typography>
                    {fruits
                      .filter(
                        (item) =>
                          item?.fruitType ===
                          'IMPORT'
                      )
                      .map(amount)
                      .reduce(sum)}
                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card>
                  <CardContent>
                    <Typography>
                      Buah Lokal
                    </Typography>
                    {fruits
                      .filter(
                        (item) =>
                          item?.fruitType ===
                          'LOCAL'
                      )
                      .map(amount)
                      .reduce(sum)}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}
