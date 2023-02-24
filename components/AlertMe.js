import Alert from 'react-bootstrap/Alert';

function AlertMe({err}) {
  return (
    <>
        <Alert variant='danger'>
          {err}
        </Alert>
      
    </>
  );
}

export default AlertMe;