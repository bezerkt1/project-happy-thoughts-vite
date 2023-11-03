import Header from "./components/Header/Header";
import MessageForm from "./components/MessageForm/MessageForm";
import MessageList from "./components/MessageList";

export const App = () => {
  return (
    <>
      <Header />
      <MessageForm />
      <MessageList />
    </>
  );
};
