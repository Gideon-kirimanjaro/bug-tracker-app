import { useReducer } from "react";
import { Button, Card, Form } from "react-bootstrap";

const LogInForm = (props) => {
  const ACTION = {
    EMAIL: "handleEmail",
    PASSWORD: "handlePassWord",
  };
  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case ACTION.EMAIL:
        return {
          ...state,
          email: action.payload,
          emailToggle:
            action.payload.length > 1 && action.payload.includes("@"),
        };
      case ACTION.PASSWORD:
        return {
          ...state,
          passWord: action.payload,
          passWordToggle: action.payload.length > 7,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    email: "",
    emailToggle: false,
    passWord: "",
    passWordToggle: false,
  });
  const emailHandler = (e) => {
    dispatch({ type: ACTION.EMAIL, payload: e.target.value });
  };
  const passWordHandler = (e) => {
    dispatch({ type: ACTION.PASSWORD, payload: e.target.value });
  };
  console.log(">>The data", state.email);

  const submit = () => {
    props.liftSubmit(state.email, state.passWord);
  };
  return (
    <>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              style={{
                borderColor: state.emailToggle ? "green" : "red",
                borderWidth: "2px",
              }}
              value={state.email}
              onChange={emailHandler}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{
                borderColor: state.passWordToggle ? "green" : "red",
                borderWidth: "2px",
              }}
              value={state.passWord}
              onChange={passWordHandler}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            disabled={
              state.emailToggle === true && state.passWordToggle === true
                ? 0
                : 1
            }
            variant="primary"
            onClick={submit}
          >
            Submit
          </Button>
          <Card
            style={{
              width: "25rem",
              padding: "4px",
              marginTop: "6PX",
            }}
          >
            <ul style={{ fontSize: "16px" }}>
              <li style={{ color: state.emailToggle ? "green" : "red" }}>
                {" "}
                The email needs to be valid{" "}
                <span>
                  {" "}
                  {state.emailToggle ? <div>😇 </div> : <div>😢 </div>}{" "}
                </span>
              </li>
              <li style={{ color: state.passWordToggle ? "green" : "red" }}>
                {" "}
                The password needs to be more than 7 characters
                <span>
                  {" "}
                  {state.passWordToggle ? <div>😇 </div> : <div>😢 </div>}{" "}
                </span>
              </li>
            </ul>
          </Card>
        </Form>
      </div>
    </>
  );
};
export default LogInForm;
