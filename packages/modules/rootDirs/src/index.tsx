import { markdownBody } from "./styles/main.css";
import { flex } from './styles/layout.css';


export default function App () {
  return (
    <div className={flex}>
      <article className={markdownBody}></article>
    </div>
  );
}