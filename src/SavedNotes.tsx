import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import Box from '@mui/material/Box';

const GET_NOTES = gql`
  query GetAllNotes {
    aaa_notes {
      title
      content
      created_at
    }
}`;

export function SavedNotes() {
  const { loading, error, data } = useQuery(
    GET_NOTES,
    { pollInterval: 1500 }
  );

  if (loading) return (<p>Loading notes...</p>);
  if (error) return <p>Error loading notes: {error.message}</p>;

  const notes = [...data.aaa_notes];
  notes.sort((a, b) => (a.created_at > b.created_at) ? -1 : ((b.created_at > a.created_at) ? 1 : 0));

  return (
    <div>
      {notes.map(({ title, content, created_at }) => (
        <Box sx={{ my: 2 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">{title}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <i>Created on: {created_at}</i>
              </Typography>
              <Typography variant="body2">{content}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </div>
  );
}
