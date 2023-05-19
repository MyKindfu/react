import { getImageUrl } from '../../utils/utils';

export function Profile({ props }) {
  return (
    <div>
      <h1>海蒂·拉玛的代办事项</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>改进频谱技术</li>
        <li>{props}</li>
      </ul>
    </div>
  );
}

function Gallery({ props }) {
  return (
    <section>
      <Profile props={props} />
    </section>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function Spreat(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

function Item({ name, isPacked }) {
  /**
   * case 1
   * 选择性的返回null
   */
  // if (!isPacked) {
  //   return null;
  // }
  /**
   * case 2 &&
   * 切勿将数字放在 && 左侧.
   * 如果左侧是 0，整个表达式将变成左侧的值（0），React 此时则会渲染 0 而不是不进行渲染
   */
  // return isPacked && <li className="item">{name}</li>;
  /**
   * case 3
   * 三目运算符
   */
  // return <li className="item">{isPacked ? name + '✔' : name}</li>;
  /**
   * case 4
   * 选择性的使用变量
   */
  // const content = isPacked ? `${name}✔` : name;
  // return <li className="item">{content}</li>;

  /**
   * case 5
   * 非文本嵌套
   */
  const content = isPacked ? `${name}✔` : <del>{name}</del>;
  return <li className="item">{content}</li>;
}

export const PackingList = ({ data }) => {
  const [a, b, c] = data;
  return (
    <section>
      <h1>wheat的行李清单</h1>
      <Item {...a} />
      <Item {...b} />
      <Item {...c} />
    </section>
  );
};

export const List = ({ data }) => {
  const listItems = data.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}因{person.accomplishment}而闻名世界
      </p>
    </li>
  ));

  return <ul>{listItems}</ul>;
};
export default Gallery;
