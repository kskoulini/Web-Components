import { html, TemplateResult } from 'lit';
import '../src/dlt-text-element.js';

export default {
  title: 'DltTextElement',
  component: 'dlt-text-element',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  header,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <dlt-text-element
    style="--dlt-text-element-background-color: ${backgroundColor}"
    .header=${header}
  ></dlt-text-element>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
