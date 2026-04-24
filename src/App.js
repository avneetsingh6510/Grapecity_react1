import './App.css';

function UserCard(props) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

// Task 6 Child Component
function Product({ name, price }) {
  return (
    <li>
      {name} - ₹{price}
    </li>
  );
}

function App() {
  // Task 1
  const name = "Avneet Singh";
  const profession = "Student / Developer";
  const hobby = "Coding and Designing";

  // Task 2
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  // Task 3
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 16) {
    greeting = "Good Afternoon";
  } else if (hour < 21) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

  // Task 4
  const list = [
    {
      title: "React Basics",
      url: "https://reactjs.org",
      author: "Jordan",
      num_comments: 10,
      points: 50,
      objectID: 1
    },
    {
      title: "JavaScript Guide",
      url: "https://javascript.info",
      author: "John",
      num_comments: 15,
      points: 70,
      objectID: 2
    }
  ];

  // Task 6
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  return (
    <div className="container">
      {/* Task 1 */}
      <div className="task">
        <h1>Task 1</h1>
        <p>Name: {name}</p>
        <p>Profession: {profession}</p>
        <p>Hobby: {hobby}</p>
      </div>

      {/* Task 2 */}
      <div className="task">
        <h1>Task 2</h1>
        <p>Date: {currentDate}</p>
        <p>Time: {currentTime}</p>
      </div>

      {/* Task 3 */}
      <div className="task">
        <h1>Task 3</h1>
        <h2>{greeting}</h2>
        <h2>{currentTime}</h2>
      </div>

      {/* Task 4 */}
      <div className="task">
        <h1>Task 4</h1>
        <table border="1">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.objectID}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Task 5 */}
      <div className="task">
        <h1>Task 5</h1>
        <UserCard
          name="Avneet Singh"
          age="20"
          email="avneetsingh6510@gmail.com"
        />
      </div>

      {/* Task 6 */}
      <div className="task">
        <h1>Task 6</h1>
        <ul>
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;