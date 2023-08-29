import './App.css';
// import { Button, Stack } from 'tamagui'
import { Stack, Input, Button,Heading, YStack, Text, AlertDialog} from 'tamagui';
function App() {
  return (
    <div className="App">
  
<Stack
spacing={6}
maxW="400px"
borderWidth={1}
borderRadius={5}
boxShadow="md"
bgColor="white"
w={{ base: "90vw", md: "45vw" }}
p={6}
>
<Heading size="lg">Login</Heading>
<Button my="10px" type="submit">Login</Button>

<Text>
Don't have an account?
{/* <Link to="/register">Register</Link> */}
</Text>
</Stack>
dfdgdg
      </div>
  );
}

export default App;
