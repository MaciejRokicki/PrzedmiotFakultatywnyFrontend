import logo from '../logo.svg';

const CustomHeader: React.FunctionComponent = ({ children }) => {
    return (
      //   <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.tsx</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
      <div>
        <p>Custom header</p>
        { children }
      </div>
    );
}

export default CustomHeader;