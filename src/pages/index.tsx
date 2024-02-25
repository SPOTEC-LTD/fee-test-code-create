import { JsonEditor } from 'assui';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.wrapper}>
      <JsonEditor />
    </div>
  );
}
