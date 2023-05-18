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

export default Gallery;
