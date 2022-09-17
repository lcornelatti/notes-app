import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useMutation } from '@apollo/client';
import TextField from '@mui/material/TextField';
import SaveIcon from '@mui/icons-material/Save';
import { gql } from '@apollo/client';

const INSERT_NEW_NOTE = gql`
mutation InsertNote($content: String!, $title: String!) {
  insert_aaa_notes(objects: {content: $content, title: $title}) {
    returning {
      id
      created_at
    }
  }
}`;

export function CurrentNote() {
  const [currentTitle, setTitle] = React.useState("");
  const [currentContent, setContent] = React.useState("");
  const [insertNewNote, { data, loading, error }] = useMutation(INSERT_NEW_NOTE);
  const saveNoteAndClear = () => {
    insertNewNote({ variables: { title: currentTitle, content: currentContent } });
    setContent("");
    setTitle("");
  };

  if (loading) return <p>Submitting note...</p>;
  if (error) return <p>Error submitting note: {error.message}</p>;

  return (
    <Card variant="outlined">
      <CardContent>
        <TextField 
          inputProps={{ maxLength: 20 }} 
          id="note-title" 
          label="Note Title" 
          variant="standard" 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <br/><br/>
        <TextField 
          inputProps={{ maxLength: 180 }} 
          id="note-content" 
          multiline 
          rows={4} 
          placeholder="Type your note here..." 
          onChange={(e) => setContent(e.target.value)} fullWidth 
        />
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          startIcon={<SaveIcon />} 
          color="success" 
          onClick={saveNoteAndClear} 
          disabled={currentTitle == "" || currentContent == ""}
        > 
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
