import React from "react";

class Progress extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    const { goal, total } = this.props;
    const percentage = ((total/goal) * 100).toFixed(2);
    return (
      <div>
        <h2 role='heading'>
          Raised ${total} of ${goal}
        </h2>
        <div role='progressbar'>
          {percentage}%
        </div>
      </div>
    );
  };
}

// const Progress = (props) => {
//   const { goal, total } = props;
//   return (
//     <h2>
//       Raised ${total} of ${goal}
//     </h2>
//   );
// };

export default Progress;
