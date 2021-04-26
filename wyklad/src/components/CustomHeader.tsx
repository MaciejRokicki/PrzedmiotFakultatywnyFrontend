const CustomHeader: React.FunctionComponent = ({ children }) => {
    return (
      <div>
        <p>Custom header</p>
        { children }
      </div>
    );
}

export default CustomHeader;