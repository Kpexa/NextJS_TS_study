import { Button, Htag, Paragraph, Tag } from '../components';

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
      <Paragraph size="sm">Small</Paragraph>
      <Paragraph>Medium</Paragraph>
      <Paragraph size="lg">Large</Paragraph>
      <Tag>Small Ghost</Tag>
      <Tag size="lg" color="green">
        Big Green
      </Tag>
      <Tag color="red">Red</Tag>
      <Tag color="grey">Grey</Tag>
      <Tag color="primary">Primary</Tag>
    </div>
  );
}
