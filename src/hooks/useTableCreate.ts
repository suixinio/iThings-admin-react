import type { ActionType } from '@ant-design/pro-table';
import message from 'antd/lib/message';

const useTableCreate = () => {
  const createHandler = async <T extends Function, k>(
    createApi: T,
    actionRef: React.MutableRefObject<ActionType | undefined>,
    body: k,
  ) => {
    let res;
    try {
      res = await createApi(body);
      if (res?.code === 200) {
        actionRef.current?.reload();
        message.success('创建成功');
      }
    } catch (error) {
      message.error((error as Error)?.message);
    }
    return res.status === 200;
  };
  return {
    createHandler,
  };
};

export default useTableCreate;
