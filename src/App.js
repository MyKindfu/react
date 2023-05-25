import './App.css';
import Gallery, {
  Profile,
  Spreat,
  PackingList,
  List,
} from './pages/practice/practice';

import Button, { State } from './pages/state/state';
import Form from './pages/immer';

import { ex1, people, sculptureList } from './mock/index';
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

  const handleClick = () => {
    alert('click！！！');
  };

  return (
    <div className="App">
      <section className="left">
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
      </section>
      {/* ------------------------ */}
      <section className="right">
        <h2>State</h2>
        <h4 className="List-title">响应事件</h4>
        <Button handleClick={handleClick} text="Click me" disable={false} />

        <h4 className="List-title">useState</h4>
        <State sculptureList={sculptureList} />

        <h4 className="List-title">
          当你使用复杂对象时，可以使用useImmer hook
        </h4>
        <Form />
      </section>
    </div>
  );
}

export default App;
