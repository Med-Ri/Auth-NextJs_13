import Alert from 'react-bootstrap/Alert';

function AlertMe({err , varient , succ}) {
  return (
    <>
        <Alert variant={varient}>
          {err}
          {succ}
        </Alert>
      
    </>
  );
}

export default AlertMe;