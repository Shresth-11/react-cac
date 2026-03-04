import Chai from "./chai";

function App() {
  const username = 'chai aur code'
  return (
    <>                    {/*<></>      -----  known as fragment */}
      <Chai />
      <h1>chai aur react {username}</h1>    
      {/* {username}    This is an evaluated expression, in which we write final outcome*/}
      <p>test para</p>
    </>
  );
}

export default App;
