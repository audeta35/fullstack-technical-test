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

export default function CaseTwo() {
  const router = useRouter();
  const comment = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent:
                'Haai juga hai jugaa',
            },
            {
              commentId: 112,
              commentContent:
                'Haai juga hai jugaa',
            },
          ],
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent:
                'Haai juga hai jugaa',
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: 'Halooo',
    },
  ];

  const countComments = (data) =>
    data.reduce((a, b) => {
      console.log('a: ', a);
      console.log('b: ', b);
      if (!b.replies) {
        console.log('!a: ', a);
        console.log('!b: ', b);
        return a + 1
      }

      console.log('=a: ', a);
      console.log('=b: ', b);
      return (
        a +
        b.replies.length +
        countComments(comment)
      );
    }, 0);

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
        <Accordion>
          <AccordionSummary>
            <Typography variant='h6'>
              5. Buatlah fungsi untuk menghitung
              total komentar yang ada, termasuk
              semua balasan komentar. Berdasarkan
              data di atas, total komentar adalah
              7 komentar.
            </Typography>
            <Divider style={{ margin: 5 }} />
          </AccordionSummary>

          <AccordionDetails>
            {countComments(comment)}
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}
