interface Notify {
  title: string;
}
interface Message {
  name: string;
  title: string;
  date: string;
}
interface Todo {
  done: boolean;
  tag: string;
  tagDesc: string;
  title: string;
  description: string;
}
// 消息推送
interface Count {
  messages: Message[];
  notifies: Notify[];
  todos: Todo[];
}

export { Todo, Count };
