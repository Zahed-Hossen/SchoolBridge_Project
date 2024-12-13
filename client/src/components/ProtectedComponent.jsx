
const ProtectedComponent = () => {
  return (
    <div>
      <h1>This is a protected route!</h1>
      <p>You can only see this if you are authenticated.</p>
    </div>
  );
};

export default ProtectedComponent;
