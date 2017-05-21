import React from 'react';
import './index.scss';

class SimpleList extends React.Component {
  render() {
    return (
      <div className="simplelist-wrapper">
        <div className="list-title">
          {this.props.title}
        </div>
      {
        this.props.items.map((item, index) => {
          return (
                  <div className="list-item" key={item.id} onClick={() => {this.props.onItemClick(item)}}>
                    <div className="list-icon">
                      <img src={item.icon} />
                    </div>
                    <div className="list-content">
                      <div className="title-line"> { item.title }</div>
                      <div className="subtitle-line"> { item.subtitle }</div>
                    </div>
                    {
                      item.action &&
                      (<div className="list-action">
                      </div>)
                    }
                  </div>
                  );
        })
      }
      </div>
    );
  }
}

SimpleList.defaultProps = {
  items: [],
  title: '',
  onItemClick: () => {}
}

SimpleList.propTypes = {
  items: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  onItemClick: React.PropTypes.func
}

export default SimpleList;
