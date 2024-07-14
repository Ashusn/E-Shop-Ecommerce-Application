import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";

const login = async () => {
  const currentUser=await getCurrentUser()
  return ( 
    <div>
      <Container>
        <FormWrap>
          <LoginForm currentUser={currentUser}/>
        </FormWrap>
      </Container>
    </div>
   );
}
 
export default login;