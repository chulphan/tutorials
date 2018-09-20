import React, { Component } from 'react';


class NameList extends Component {

    static defaultProps = {
        namelist: []
    }

    render() {
        const { namelist } = this.props;
        const list = namelist.map((one, idx) => {
            return (<div key={idx}>
                {one.name}
            </div>);
        });
        return (
          <div>
              {list}
          </div>
        )
    }
}

export default NameList;