import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Welcome</Htag>
      <Button appearance="primary" arrow="right">
        Open
      </Button>
      <Button appearance="ghost" arrow="down">
        Close
      </Button>
    </div>
  );
}
