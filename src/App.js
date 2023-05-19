import './App.css';
import Gallery, {
  Profile,
  Spreat,
  PackingList,
  List,
} from './pages/practice/practice';

import { ex1, people } from './mock/index';
function App() {
  const a = '阅读中华上下五千年';
  const b = '爱迪生的无聊';
  const data = {
    person: {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
    },
    size: 100,
    extra: 11,
  };

  return (
    <div className="App">
      <div className="body">
        <h2>Practice List</h2>
        <h4 className="List-title">默认导出</h4>
        <Gallery props={a} />
        <h4 className="List-title">具名导出 props</h4>
        <Profile props={b} />

        <h4 className="List-title">展开语法传递props</h4>
        <Spreat {...data} />

        <h4 className="List-title">条件渲染</h4>
        <PackingList data={ex1} />

        <h4 className="List-title">渲染list</h4>
        <List data={people} />
      </div>
    </div>
  );
}

export default App;
