import './App.css';
import Gallery, { Profile, Spreat } from './pages/practice/practice';

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
      </div>
    </div>
  );
}

export default App;
