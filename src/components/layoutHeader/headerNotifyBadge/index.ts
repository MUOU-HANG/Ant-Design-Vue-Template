import { Count } from "@/types/header/noticeBadge";
import { reactive } from "vue";

// 初始化数据
const data = reactive({
  notifies: [],
  messages: [],
  todos: []
});
// 获取通知数据
const useGetNotify = (emit: any, data: Count) => {
  // 从数据库获取数据
  const notifies = [
    { title: "Ant Design Title 1" },
    { title: "Ant Design Title 2" },
    { title: "Ant Design Title 3" },
    { title: "Ant Design Title 4" }
  ];
  data.notifies = notifies;
  emit("getNumber", data);
};
// 清空通知
const useClearNotify = (emit: any, data: Count) => {
  const clearNotify = () => {
    // 调用接口，删除数据库中的数据（这里用清空数组模拟）
    data.notifies = [];
    emit("getNumber", data);
  };
  return { clearNotify };
};
// 获取消息数据
const useGetMessage = (emit: any, data: Count) => {
  const messages = [
    { name: "曲丽丽", title: "评论了你", date: "三年前" },
    { name: "曲丽丽", title: "回复了你", date: "三年前" },
    { name: "曲丽丽", title: "标题", date: "三年前" }
  ];
  data.messages = messages;
  emit("getNumber", data);
};
// 清空消息数据
const useClearMessage = (emit: any, data: Count) => {
  const clearMessage = () => {
    // 调用接口，删除数据库中的数据（这里用清空数组模拟）
    data.messages = [];
    emit("getNumber", data);
  };
  return { clearMessage };
};
// 获取待办数据
const useGetTodo = (emit: any, data: Count) => {
  const todos = [
    { done: false, tag: "grey", tagDesc: "未开始", title: "任务名称", description: "任务需要在 2017-01-12 20:00 前启动" },
    { done: true, tag: "red", tagDesc: "马上到期", title: "代码变更", description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务" },
    { done: false, tag: "orange", tagDesc: "已耗时8天", title: "信息安全考试", description: "指派竹尔于 2017-01-09 前完成更新并发布" },
    { done: false, tag: "blue", tagDesc: "进行中", title: "ABDC版本发布", description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务" }, { done: false, tag: "grey", tagDesc: "未开始", title: "任务名称", description: "任务需要在 2017-01-12 20:00 前启动" },
    { done: true, tag: "red", tagDesc: "马上到期", title: "代码变更", description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务" },
    { done: false, tag: "orange", tagDesc: "已耗时8天", title: "信息安全考试", description: "指派竹尔于 2017-01-09 前完成更新并发布" },
    { done: false, tag: "blue", tagDesc: "进行中", title: "ABDC版本发布", description: "冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务" }
  ];
  data.todos = todos;
  emit("getNumber", data);
};
// 清空待办数据
const useClearTodo = (emit: any, data: Count) => {
  const clearTodo = () => {
    // 调用接口，删除数据库中的数据（这里用清空数组模拟）
    data.todos = [];
    emit("getNumber", data);
  };

  return { clearTodo };
};
// 完成待办事项
const useDoneTodo = (emit, data: Count) => {
  const todoDone = (index: number) => {
    // 修改数据库中该条记录的状态
    data.todos[index].done = true;
    emit("getNumber", data);
  };
  return { todoDone };
};
export {
  data,
  useGetMessage,
  useClearMessage,
  useGetNotify,
  useClearNotify,
  useGetTodo,
  useClearTodo,
  useDoneTodo
};
