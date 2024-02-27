import { JsonEditor } from 'assui';
import { Button, Form, Table, Checkbox } from 'antd';
import axios from 'axios';
import { snakeCase } from 'lodash';
import { downloadFile } from 'aa-utils';
import styles from './index.less';

function downloadPythonFile(content, filename) {
  const element = document.createElement('a');
  const file = new Blob([content], { type: 'text/x-python' });
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element); // Required for this to work in Firefox
  element.click();
  document.body.removeChild(element);
}

export default function IndexPage() {
  const [form] = Form.useForm();
  const content = Form.useWatch('content', form);
  const onFinish = (values) => {
    const host =
      SERVE_ENV === 'pro'
        ? 'http://192.168.0.14:3000'
        : 'http://localhost:3000';
    axios.post(`${host}/generate-python-file`, { values }).then(({ data }) => {
      downloadPythonFile(
        data.code,
        `test_${snakeCase(values.content.funcNameSpace)}.py`,
      );
    });
  };

  const dataSource = content?.casesList || [];

  const columns = [
    {
      title: '索引',
      dataIndex: 'index',
      key: 'index',
      render(text, record, index) {
        return index;
      },
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render(v) {
        return <div style={{ width: 300 }}>{v}</div>;
      },
    },
    {
      title: '生产环境运行',
      dataIndex: 'runPro',
      key: 'runPro',
    },
    {
      title: '路径参数',
      dataIndex: 'pathParams',
      key: 'pathParams',
      render(value: any) {
        return value ? (
          <div style={{ whiteSpace: 'pre' }}>
            {JSON.stringify(value, null, 2)}
          </div>
        ) : (
          '-'
        );
      },
    },
    {
      title: '接口参数',
      dataIndex: 'data',
      key: 'data',
      render(value: any) {
        return (
          <div style={{ whiteSpace: 'pre' }}>
            {JSON.stringify(value, null, 2)}
          </div>
        );
      },
    },
    {
      title: '期待结果',
      dataIndex: 'expected',
      key: 'expected',
      render(value: any) {
        console.log(
          'JSON.stringify(value, null, 2)',
          JSON.stringify(value, null, 2),
        );

        return (
          <div style={{ whiteSpace: 'pre' }}>
            {JSON.stringify(value, null, 2)}
          </div>
        );
      },
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Form onFinish={onFinish} form={form} initialValues={{ useStory: true }}>
        <Form.Item name="content" label="测试用例数据">
          <JsonEditor className={styles.jsonEditor} />
        </Form.Item>
        <Form.Item name="useStory" label="细分store" valuePropName="checked">
          <Checkbox />
        </Form.Item>

        <Button htmlType="submit">生成代码</Button>
      </Form>
      <Table
        className={styles.table}
        dataSource={dataSource}
        columns={columns}
      />
      ;
    </div>
  );
}
